# English - Complete English Learning Platform

A production-ready, Duolingo-inspired English learning web application with gamification, speech recognition, and real-time leaderboards.

## 🎯 Features

### Core Learning System
- **Multiple Question Types**: Multiple choice, fill-in-the-blank, sentence arranging, and speaking practice
- **Speech Recognition**: Real-time voice recognition for pronunciation practice
- **Progressive Learning Path**: Organized into Units with locked/unlocked lessons
- **Instant Feedback**: Visual and audio feedback for correct/incorrect answers

### Gamification
- **XP System**: Earn experience points for completing lessons
- **Level Progression**: Automatic level-up when reaching XP milestones
- **Daily Streaks**: Track consecutive days of learning
- **Achievement Badges**: Unlock badges for various accomplishments
- **Lives System**: Heart-based attempt system during lessons

### Backend Integration
- **Node.js Server**: Handles leaderboard calculations and user syncing
- **REST API**: Real-time progress updates
- **Hybrid Mode**: Works offline with localStorage fallback

## 📁 Project Structure

```
lingo/
├── index.html              # Landing page
├── auth.html               # Login/Signup
├── dashboard.html          # Learning path with Units
├── lesson.html             # Interactive lesson player
├── profile.html            # User stats and achievements
├── css/
│   └── styles.css          # Complete design system
├── js/
│   ├── app.js              # Global state management
│   ├── data.js             # Lesson content database
│   └── lesson.js           # Lesson engine with speech recognition
└── server/
    ├── package.json        # Backend dependencies
    └── index.js            # Express server for leaderboards
```

## 🚀 Getting Started

### Frontend (Standalone Mode)
1. Open `index.html` in your browser
2. Create an account or login
3. Start learning from the dashboard
4. Progress is saved automatically to localStorage

### Backend Setup (Optional - for Leaderboards)

**Note**: If you encounter PowerShell execution policy errors, run this command first:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install and run the server:

```bash
# Navigate to server directory
cd lingo/server

# Install dependencies
npm install

# Start the server
npm start
```

The backend will run at `http://localhost:3000`

### API Endpoints
- `POST /api/update-progress` - Sync user XP and stats
- `GET /api/leaderboard` - Get top 10 players
- `POST /api/admin/clear` - Clear leaderboard (admin only)

## 🎨 Design System

### Colors
- **Primary Green**: `#58cc02` (Correct answers, progress)
- **Secondary Blue**: `#1cb0f6` (Interactive elements)
- **Accent Yellow**: `#ffc800` (Achievements)
- **Danger Red**: `#ff4b4b` (Incorrect answers)

### Typography
- **Font**: Outfit (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

## 🔧 Technologies Used

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Web Speech API (for speaking tasks)
- Canvas Confetti (celebrations)
- LocalStorage (offline persistence)

### Backend
- Node.js + Express
- CORS enabled
- In-memory data store (upgradeable to MongoDB/PostgreSQL)

## 📱 Responsive Design
- Desktop: Full sidebar navigation
- Mobile: Bottom navigation bar
- Adaptive layouts for all screen sizes

## 🎓 Learning Content Structure

Each lesson contains:
- Question type (multiple-choice, arrange, fill-blank, speaking)
- XP reward
- Audio support (text-to-speech)
- Instant validation

## 🔐 User Data

Stored in localStorage:
- Username
- XP and Level
- Streak count
- Completed lessons
- Unlocked units
- Badges earned

## 🌐 Deployment Ready

### GitHub Pages
1. Push the `lingo` folder to your repository
2. Enable GitHub Pages in settings
3. Set source to main branch

### Backend Deployment (Heroku/Railway)
1. Deploy the `server` folder
2. Update `API_URL` in `js/app.js` to your deployed URL

## 📝 License
Free to use for educational purposes.

---

**Built with ❤️ for English learners worldwide**

