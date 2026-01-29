# EpicQuiz Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### 3. Test Login
**Demo User:**
- Email: demo@epicquiz.com
- Password: demo123

**Admin User:**
- Email: admin@epicquiz.com
- Password: admin123

---

## 📱 Install as Mobile App

### On iPhone/iPad (iOS)
1. Open app in Safari
2. Tap Share button
3. Select "Add to Home Screen"
4. Name: EpicQuiz
5. Press Add

### On Android Phone
1. Open app in Chrome
2. Tap Menu (⋮)
3. Select "Install app"
4. Confirm installation

---

## 🌐 Deploy to Production

### Option 1: Netlify (Recommended) - 1 Click Deploy
```bash
npm run build
# Push to GitHub
# Connect to Netlify → Auto deploy
```

### Option 2: Vercel
```bash
npm run build
# Push to GitHub
# Import to Vercel → Auto deploy
```

### Option 3: Manual (Any Server)
```bash
npm run build
# Deploy .next folder to your server
```

---

## 📋 Complete Feature Checklist

✅ **Authentication**
- Login/Signup
- Role-based access (Admin/User)
- Encrypted localStorage

✅ **Reading Section**
- 15 Complete Chapters
- 45 Detailed Topics
- Student-friendly content
- Key points for each topic

✅ **Quiz System**
- Chapter-based quizzes
- Topic-wise MCQs
- 4 options per question
- Instant feedback
- Difficulty levels
- Score tracking

✅ **EpiMentor AI**
- Text responses
- Text-to-speech (voice output)
- Speech-to-text (voice input)
- Image upload & analysis
- Video upload & playback
- AI image generation
- AI video generation
- Multilingual support

✅ **Security**
- Admin dashboard hidden from users
- Route protection
- Role validation
- Data encryption
- Access alerts

✅ **Responsive Design**
- Mobile (iOS/Android)
- Tablet
- Desktop
- PWA support

---

## 🔧 Configuration

### Change App Name
Edit `manifest.json`:
```json
"name": "Your App Name",
"short_name": "YourApp"
```

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
}
```

### Change Logo
Replace: `/public/icon-192x192.svg`

---

## 📂 Project Structure

```
EpicQuiz/
├── app/                    # Next.js app files
├── components/             # React components
├── contexts/              # Context providers
├── data/                  # Book & quiz content
├── public/                # Assets & PWA files
├── DEPLOYMENT_GUIDE.md    # Detailed deployment
├── SETUP.md              # This file
└── package.json          # Dependencies
```

---

## 🎯 Default Accounts

**Admin Access:**
- Email: admin@epicquiz.com
- Password: admin123
- Role: Admin (full access)

**Regular User:**
- Email: demo@epicquiz.com
- Password: demo123
- Role: User (learning only)

---

## 💾 Data Storage

- **User Data**: Encrypted in browser localStorage
- **Progress**: Automatically saved
- **Quizzes**: Score history tracked
- **AI Chat**: Conversation stored locally

---

## 🚢 Deploy Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## ✨ Key Features Summary

| Feature | Status | Details |
|---------|--------|---------|
| 15 Chapters | ✅ | All from Essential Epidemiology 2nd Ed |
| 45 Topics | ✅ | Comprehensive content |
| MCQ Quizzes | ✅ | 100+ questions across all topics |
| AI Assistant | ✅ | Text, voice, image, video support |
| Mobile App | ✅ | iOS/Android installable |
| Offline | ✅ | Works without internet |
| Admin Panel | ✅ | Secure admin features |
| Security | ✅ | Role-based access control |
| Responsive | ✅ | All devices supported |

---

## 🔐 Security Checklist

- ✅ Admin panel hidden from users
- ✅ Route protection implemented
- ✅ Role validation on access
- ✅ Alerts for unauthorized attempts
- ✅ Encrypted data storage
- ✅ User isolation
- ✅ No sensitive data in logs

---

## 📞 Need Help?

1. Check DEPLOYMENT_GUIDE.md for deployment help
2. Review app console (F12) for errors
3. Clear cache and reload (Ctrl+Shift+Delete)
4. Verify all files are present
5. Test with default accounts first

---

## 🎓 Content Coverage

**All 15 Chapters Included:**
1. ✅ What is Epidemiology?
2. ✅ Measuring Health and Disease
3. ✅ Patterns of Disease
4. ✅ Investigating an Epidemic
5. ✅ Study Designs in Epidemiology
6. ✅ Cohort Studies
7. ✅ Case-Control Studies
8. ✅ Randomized Controlled Trials
9. ✅ Bias in Epidemiological Studies
10. ✅ Assessing Causation
11. ✅ Screening for Disease
12. ✅ Infectious Disease Epidemiology
13. ✅ Chronic Disease Epidemiology
14. ✅ Environmental and Occupational Epidemiology
15. ✅ Epidemiology and Health Policy

---

**Ready to go live? Push to GitHub and deploy! 🚀**
