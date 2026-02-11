/**
 * Advanced LingoEnglish - Global App Logic
 */

const SESSION_KEY = 'lingo_active_session';
const USER_PREFIX = 'lingo_u_';

const defaultUserData = {
    username: 'Guest Learner',
    xp: 0,
    streak: 0,
    gems: 500,
    level: 1,
    hearts: 5,
    lastHeartRefill: Date.now(),
    completedLessons: [],
    unlockedUnits: ['unit-1'],
    lastActiveDate: null,
    isLoggedIn: false,
    settings: {
        soundEffects: true,
        voiceSpeed: 1.0,
        darkMode: false,
        avatar: '🦉'
    },
    boosts: {
        streakFreeze: 0,
        doubleXP: 0
    },
    ownedItems: []
};

class LingoApp {
    constructor() {
        this.activeEmail = localStorage.getItem(SESSION_KEY);
        this.userData = this.loadUserData();
        this.updateHearts();
        this.sounds = {
            correct: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3',
            incorrect: 'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3',
            levelUp: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
            button: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'
        };
        this.initUI();
    }

    loadUserData() {
        if (!this.activeEmail) return { ...defaultUserData };

        const key = USER_PREFIX + this.activeEmail;
        const stored = localStorage.getItem(key);

        if (stored) {
            try {
                const data = JSON.parse(stored);
                return {
                    ...defaultUserData,
                    ...data,
                    settings: { ...defaultUserData.settings, ...(data.settings || {}) },
                    boosts: { ...defaultUserData.boosts, ...(data.boosts || {}) }
                };
            } catch (e) {
                return { ...defaultUserData };
            }
        }
        return { ...defaultUserData };
    }

    saveUserData() {
        if (!this.activeEmail) return;
        const key = USER_PREFIX + this.activeEmail;
        localStorage.setItem(key, JSON.stringify(this.userData));
        this.updateGlobalUI();
        this.syncWithBackend();
    }

    setActiveUser(email, username) {
        this.activeEmail = email;
        localStorage.setItem(SESSION_KEY, email);
        this.userData = this.loadUserData();
        if (username) this.userData.username = username;
        this.userData.isLoggedIn = true;
        this.saveUserData();
    }

    logout() {
        localStorage.removeItem(SESSION_KEY);
        window.location.href = 'index.html';
    }

    updateHearts() {
        if (this.userData.hearts >= 5) return;

        const now = Date.now();
        const diff = now - this.userData.lastHeartRefill;
        const heartInterval = 30 * 60 * 1000; // 30 minutes per heart

        if (diff >= heartInterval) {
            const heartsToAdd = Math.floor(diff / heartInterval);
            this.userData.hearts = Math.min(5, this.userData.hearts + heartsToAdd);
            this.userData.lastHeartRefill = now - (diff % heartInterval);
            this.saveUserData();
        }
    }

    async syncWithBackend() {
        const API_URL = 'http://localhost:3000/api/update-progress';
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.userData.username,
                    xp: this.userData.xp,
                    level: this.userData.level,
                    streak: this.userData.streak
                })
            });
            const data = await response.json();
            console.log('Backend Sync:', data.message);
        } catch (error) {
            console.warn('Backend offline. Saving locally only.');
        }
    }

    checkStreak(data) {
        if (!data.lastActiveDate) return;
        const today = new Date().toDateString();
        const lastDate = new Date(data.lastActiveDate).toDateString();
        if (today === lastDate) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastDate !== yesterday.toDateString()) {
            // Check for Streak Freeze
            if (data.boosts && data.boosts.streakFreeze > 0) {
                data.boosts.streakFreeze--;
                console.log('Streak saved by Freeze! 🧊');
            } else {
                data.streak = 0;
            }
        }
    }

    playSound(type) {
        if (!this.userData.settings.soundEffects) return;
        const audio = new Audio(this.sounds[type]);
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio blocked', e));
    }

    addXP(amount) {
        this.userData.xp += amount;
        const newLevel = Math.floor(this.userData.xp / 1000) + 1;
        if (newLevel > this.userData.level) {
            this.userData.level = newLevel;
            this.playSound('levelUp');
            this.showToast(`Level Up! You are now Level ${newLevel}`);
        }
        this.saveUserData();
    }

    completeLesson(lessonId, xpEarned) {
        let finalXP = xpEarned;

        // Handle Double XP Boost
        if (this.userData.boosts.doubleXP > 0) {
            finalXP *= 2;
            this.userData.boosts.doubleXP--;
            this.showToast(`🔥 2x XP Applied! ${this.userData.boosts.doubleXP} boosts left.`);
        }

        if (!this.userData.completedLessons.includes(lessonId)) {
            this.userData.completedLessons.push(lessonId);
            this.userData.gems += 10;
        }

        const today = new Date().toDateString();
        if (this.userData.lastActiveDate !== today) {
            this.userData.streak += 1;
        }

        this.userData.lastActiveDate = today;
        this.addXP(finalXP);
        this.saveUserData();
    }

    initUI() {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateGlobalUI();
            this.handleGlobalClicks();
        });
    }

    handleGlobalClicks() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn')) {
                this.playSound('button');
            }
        });
    }

    updateGlobalUI() {
        const els = {
            xp: document.getElementById('stat-xp'),
            streak: document.getElementById('stat-streak'),
            gems: document.getElementById('stat-gems'),
            hearts: document.getElementById('stat-hearts'),
            logo: document.querySelector('.logo')
        };

        if (els.xp) els.xp.textContent = this.userData.xp;
        if (els.streak) {
            const freezeCount = this.userData.boosts.streakFreeze > 0 ? ` (🧊)` : '';
            els.streak.textContent = this.userData.streak + freezeCount;
        }
        if (els.gems) els.gems.textContent = this.userData.gems;
        if (els.hearts) els.hearts.textContent = this.userData.hearts;

        // Apply Avatar Settings
        if (els.logo && this.userData.settings.avatar) {
            const logoText = els.logo.textContent.replace(/[🦉🧥👑]/g, '').trim();
            els.logo.innerHTML = `${this.userData.settings.avatar} ${logoText}`;
        }

        // Apply Dark Mode
        if (this.userData.settings.darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        const userDisplays = document.querySelectorAll('.display-username');
        userDisplays.forEach(el => el.textContent = this.userData.username);
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast animate-pop';
        toast.style.cssText = `
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background: #1cb0f6; color: white; padding: 15px 30px;
            border-radius: 50px; font-weight: 800; z-index: 10000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}

const lingo = new LingoApp();
