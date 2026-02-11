const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory "database" for leaderboard (In production, use MongoDB or PostgreSQL)
let players = [];

// Helper: Find or Create player
const getOrCreatePlayer = (username) => {
    let player = players.find(p => p.username === username);
    if (!player) {
        player = { username, xp: 0, level: 1, streak: 0, lastUpdated: new Date() };
        players.push(player);
    }
    return player;
};

/**
 * @route POST /api/update-progress
 * @desc Sync user progress and update leaderboard
 */
app.post('/api/update-progress', (req, res) => {
    const { username, xp, level, streak } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    const player = getOrCreatePlayer(username);

    // Update player data
    player.xp = xp;
    player.level = level;
    player.streak = streak;
    player.lastUpdated = new Date();

    console.log(`[Sync] Updated progress for: ${username} (${xp} XP)`);

    res.json({ success: true, message: 'Progress synced successfully' });
});

/**
 * @route GET /api/leaderboard
 * @desc Get sorted list of players by XP
 */
app.get('/api/leaderboard', (req, res) => {
    // Sort logic: Higher XP first. If XP is same, sort by streak.
    const leaderboard = [...players]
        .sort((a, b) => b.xp - a.xp || b.streak - a.streak)
        .slice(0, 10); // Return top 10

    res.json(leaderboard);
});

// Clear leaderboard (Optional maintenance)
app.post('/api/admin/clear', (req, res) => {
    players = [];
    res.json({ message: 'Leaderboard cleared' });
});

app.listen(PORT, () => {
    console.log(`🚀 Lingo Backend running at http://localhost:${PORT}`);
    console.log(`- Update Progress: POST /api/update-progress`);
    console.log(`- Get Leaderboard: GET /api/leaderboard`);
});
