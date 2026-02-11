# Installation Instructions

## ⚠️ PowerShell Execution Policy Issue

If you see this error when running `npm install`:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

### Solution:
Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try `npm install` again.

## Backend Setup Steps

1. **Navigate to server folder**:
   ```bash
   cd lingo/server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Verify it's running**:
   - Open browser to `http://localhost:3000/api/leaderboard`
   - You should see an empty array `[]`

## Frontend Usage

1. Open `lingo/index.html` in your browser
2. The app works standalone without the backend
3. When backend is running, leaderboard will sync automatically

## GitHub Deployment

### Option 1: GitHub Pages (Frontend Only)
1. Create a new repository on GitHub
2. Push the `lingo` folder
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name/`

### Option 2: Full Stack (Frontend + Backend)
**Frontend**: Deploy to GitHub Pages (see above)
**Backend**: Deploy to Railway/Render/Heroku

For Railway:
```bash
cd lingo/server
railway login
railway init
railway up
```

Then update `js/app.js` line 52:
```javascript
const API_URL = 'https://your-backend-url.railway.app/api/update-progress';
```

## Troubleshooting

### Backend won't start
- Ensure Node.js is installed: `node --version`
- Check if port 3000 is available
- Try a different port by editing `server/index.js` line 5

### Frontend not connecting to backend
- Check browser console for CORS errors
- Verify backend URL in `js/app.js`
- Ensure backend is running

### Speech recognition not working
- Use Chrome/Edge (best support)
- Allow microphone permissions
- HTTPS required for production (works on localhost)
