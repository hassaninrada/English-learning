# 🎮 LingoEnglish - User Guide & Demo

## Quick Start Guide

### 1. **Landing Page** (`index.html`)
- Beautiful hero section with call-to-action
- Feature cards explaining the platform
- Click "Get Started" to begin

### 2. **Create Account** (`auth.html`)
- Enter your username, email, and password
- Toggle between Login/Signup modes
- Your data is saved to browser localStorage

### 3. **Dashboard** (`dashboard.html`)
- See your learning path organized by Units
- **Lesson Nodes**:
  - ⭐ **Green** = Completed
  - 🔵 **Blue (bouncing)** = Active/Available
  - ⚫ **Gray** = Locked (complete previous lessons first)
- Click any active lesson to start learning

### 4. **Lesson Player** (`lesson.html`)
- **Question Types**:
  - 📝 Multiple Choice
  - 🔤 Fill in the Blank
  - 🧩 Sentence Arranging (click words to build)
  - 🎤 Speaking Practice (click mic and speak)
- **Lives System**: You have 5 hearts ❤️
- **Progress Bar**: Shows how far you are in the lesson
- **Instant Feedback**: Green = Correct, Red = Incorrect

### 5. **Leaderboard** (`leaderboard.html`)
- See global rankings (requires backend)
- Top 3 displayed on podium
- Your rank is highlighted in blue
- **Offline Mode**: Shows only your stats if backend isn't running

### 6. **Shop** (`shop.html`)
- Spend gems earned from lessons
- **Categories**:
  - ⚡ Power-Ups (consumable)
  - 🎨 Cosmetics (permanent)
  - 🎁 Bundles (best value)
- Purchase items to enhance your experience

### 7. **Profile** (`profile.html`)
- View your stats: XP, Streak, Level, Gems
- See unlocked achievement badges
- Logout option

---

## 🎯 Earning System

### XP (Experience Points)
- **Lesson Completion**: 100-150 XP per lesson
- **Level Up**: Every 1000 XP = +1 Level
- Displayed as 💎 in top bar

### Gems (Currency)
- **Earn**: +10 gems per lesson completed
- **Spend**: Buy items in the Shop
- Displayed as ❤️ in top bar

### Streaks
- **Daily Learning**: +1 streak for each day you complete a lesson
- **Miss a Day**: Streak resets to 0
- **Streak Freeze**: Buy in shop to protect your streak
- Displayed as 🔥 in top bar

---

## 🎤 Using Speech Recognition

1. Navigate to a lesson with a "Speaking" question
2. Click the 🎤 microphone button
3. **Allow microphone access** when browser prompts
4. Speak clearly in English
5. The app will transcribe and verify your pronunciation
6. Click "Check Answer" to see if you're correct

**Supported Browsers**: Chrome, Edge, Safari (latest versions)

---

## 🏆 Achievement Badges

### Available Badges:
- 🐣 **Genesis** - Join LingoEnglish (auto-unlocked)
- 🔥 **Wildfire** - Maintain a 3-day streak
- 👑 **Scholar** - Earn 1000 total XP
- 🎯 **Sharpshooter** - Complete any lesson

Check your Profile page to see which badges you've unlocked!

---

## 🎨 Shop Items Explained

### Power-Ups (Consumable)
- **Refill Hearts** (50 gems): Restore all 5 hearts instantly
- **Streak Freeze** (100 gems): Protect your streak for 1 day
- **Double XP Boost** (150 gems): Earn 2x XP for next 3 lessons

### Cosmetics (Permanent)
- **Golden Owl** (300 gems): Premium avatar
- **Gentleman Owl** (250 gems): Fancy top hat avatar
- **Dark Mode Theme** (400 gems): Enable dark theme

### Bundles (Best Value)
- **Starter Bundle** (350 gems): 3 Heart Refills + 2 Streak Freezes
- **Premium Bundle** (1000 gems): All cosmetics + 5 Double XP Boosts

---

## 🔧 Backend Features (Optional)

### Without Backend:
✅ All lessons work
✅ Progress saved locally
✅ XP and streaks tracked
❌ No global leaderboard
❌ Only see your own stats

### With Backend Running:
✅ Everything above PLUS:
✅ Global leaderboard rankings
✅ Real-time XP syncing
✅ Compete with other learners

### Starting the Backend:
```bash
cd lingo/server
npm install
npm start
```

Server runs at `http://localhost:3000`

---

## 📱 Mobile Experience

The app is fully responsive:
- **Desktop**: Vertical sidebar navigation
- **Mobile**: Bottom navigation bar (like Duolingo app)
- Touch-friendly buttons and interactions
- Optimized layouts for small screens

---

## 🎓 Learning Tips

1. **Daily Practice**: Complete at least 1 lesson per day to maintain your streak
2. **Earn Gems**: Complete lessons to earn gems for shop items
3. **Use Speaking Tasks**: Practice pronunciation with voice recognition
4. **Track Progress**: Check your profile regularly to see improvement
5. **Compete**: View leaderboard to see how you rank globally

---

## 🐛 Troubleshooting

### Microphone Not Working
- Ensure browser has microphone permissions
- Use Chrome or Edge for best support
- Check if microphone is working in other apps

### Progress Not Saving
- Don't use Incognito/Private mode
- Check browser localStorage is enabled
- Clear cache and try again

### Leaderboard Shows "Offline"
- Backend server needs to be running
- Check `http://localhost:3000/api/leaderboard` in browser
- See INSTALL.md for backend setup

### Lessons Not Unlocking
- Complete previous lessons first
- Lessons unlock sequentially within each unit
- Check dashboard for active (blue) lessons

---

## 🎉 Demo Walkthrough

### Complete First Lesson:
1. Open `index.html` → Click "Get Started"
2. Create account with username "DemoUser"
3. Click first lesson "Saying Hello"
4. Answer 3 questions
5. Complete lesson → Earn 100 XP + 10 gems
6. See confetti celebration! 🎊

### Test Shop:
1. Go to Shop page
2. You now have 510 gems (500 starting + 10 earned)
3. Buy "Refill Hearts" for 50 gems
4. Balance updates to 460 gems

### Check Leaderboard:
1. Go to Leaderboard page
2. If backend running: See global rankings
3. If offline: See your local stats only

---

**Enjoy learning English with LingoEnglish! 🦉**
