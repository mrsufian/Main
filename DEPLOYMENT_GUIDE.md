# EpicQuiz - Deployment Guide

## Overview
EpicQuiz is a fully responsive Progressive Web App (PWA) that works on mobile, tablet, and desktop devices.

## Quick Deploy to Netlify

### Step 1: Prepare Your Repository
```bash
git add .
git commit -m "Complete EpicQuiz app"
git push origin main
```

### Step 2: Deploy to Netlify (Recommended)
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy"

### Step 3: Custom Domain
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS records as shown

---

## Deploy as Mobile App

### iOS
1. Go to your deployed site in Safari
2. Tap Share → Add to Home Screen
3. App will install with EpicQuiz icon

### Android
1. Go to your deployed site in Chrome
2. Tap Menu → Install app
3. App will install with EpicQuiz icon

### PWA Features
- ✅ Works offline (service worker caching)
- ✅ App-like experience (full-screen, no address bar)
- ✅ Push notifications ready
- ✅ Install prompts on mobile browsers
- ✅ Fast loading with optimized assets

---

## Environment Setup

### Local Development
```bash
npm install
npm run dev
```
Visit: http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

---

## File Structure
```
epicquiz/
├── public/
│   ├── manifest.json          # PWA configuration
│   ├── service-worker.js      # Offline support
│   ├── icon-192x192.svg       # App icon
│   └── icon-512x512.svg       # Large app icon
├── app/
│   ├── layout.tsx             # Root layout with PWA metadata
│   ├── page.tsx               # Main app page
│   └── globals.css            # Global styles
├── components/
│   ├── Dashboard.tsx          # User dashboard
│   ├── ReadingSection.tsx     # Book reading
│   ├── QuizSection.tsx        # Quiz system
│   ├── AIAssistant.tsx        # EpiMentor AI
│   ├── AdminPanel.tsx         # Admin features
│   └── Navbar.tsx             # Navigation
├── contexts/
│   └── AuthContext.tsx        # User authentication
└── data/
    ├── bookContent.ts         # All 15 chapters + 45 topics
    └── quizData.ts            # MCQs for all topics
```

---

## Authentication

Default Accounts:
- **Regular User**: demo@epicquiz.com / demo123
- **Admin**: admin@epicquiz.com / admin123

User data is encrypted and stored in browser localStorage.

---

## Features Implemented

### 📚 Reading Section
- All 15 chapters from Essential Epidemiology 2nd Edition
- 45 comprehensive topics
- Student-friendly explanations
- Key points for each topic
- Chapter-to-topic navigation

### 📝 Quiz System
- Chapter-based quizzes
- Topic-wise MCQs
- 4 multiple-choice options
- Instant feedback with explanations
- Difficulty levels (Easy/Medium/Hard)
- Randomized questions
- Score tracking

### 🤖 EpiMentor AI Assistant
- Text-to-speech (listen to AI responses)
- Speech-to-text (speak questions)
- Image upload and analysis
- Video upload and analysis
- AI image generation (educational diagrams)
- AI video generation (study videos)
- Real-time voice conversations
- Multilingual support

### 👥 User Features
- Secure login/signup
- Progress tracking
- Quiz score history
- Personalized dashboard
- Responsive design

### 🔒 Admin Dashboard (Secure)
- User management
- Analytics and statistics
- Feature enable/disable
- AI monitoring
- Admin-only access with role-based protection

---

## Responsive Design

### Mobile (< 768px)
- Touch-optimized interface
- Bottom navigation
- Fullscreen content
- Mobile app-like layout

### Tablet (768px - 1024px)
- Side-by-side layout
- Optimized tap targets
- Readable text sizes

### Desktop (> 1024px)
- Full navigation bar
- Multi-column layout
- Rich UI elements

---

## Security Features

✅ User role-based access (Admin/User)
✅ Admin panel completely hidden from regular users
✅ Route protection against direct access
✅ Encrypted data storage
✅ Session isolation
✅ Alert system for unauthorized access attempts
✅ No sensitive data in browser logs

---

## Customization

### Change App Logo
Replace `/public/icon-192x192.svg` with your logo

### Update Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#4F46E5',      // Purple
  secondary: '#10B981',    // Green
  accent: '#F59E0B',       // Amber
}
```

### Add More Content
Edit `/data/bookContent.ts` to add chapters/topics
Edit `/data/quizData.ts` to add quiz questions

---

## Performance Tips

- Service worker caches essential files
- Images are optimized with Next.js Image
- Code splitting for faster initial load
- Lazy loading for components
- CSS compression in production

---

## Troubleshooting

### Service Worker Not Working
- Clear browser cache (Cmd+Shift+Delete)
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check DevTools → Application → Service Workers

### App Not Installing on Mobile
- Ensure HTTPS is enabled (requirement for PWA)
- Check manifest.json is loading
- Try different browser (Chrome on Android, Safari on iOS)

### Admin Access Denied
- Ensure you're logged in as admin user
- Check browser localStorage for user role
- Try a different admin account

---

## Support

For issues or questions:
1. Check dev console (F12)
2. Review error messages
3. Verify all files are in place
4. Clear browser cache and restart

---

## License
EpicQuiz © 2024. All rights reserved.

---

**Ready to deploy? Start with the Netlify button above!**
