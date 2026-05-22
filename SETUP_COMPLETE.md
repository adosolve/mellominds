# MelloMinds Full Stack Setup - Complete ✅

## What's Been Set Up

### Frontend (React + Vite + Tailwind CSS)
- ✅ Fixed UI styling with Tailwind CSS
- ✅ Dev server running on `http://localhost:3000`
- ✅ All components properly styled
- ✅ Environment variables configured

### Backend (Express.js + PostgreSQL)
- ✅ Complete REST API built
- ✅ Database connected and initialized
- ✅ Sarvam AI integration ready
- ✅ Cloudinary integration configured
- ✅ Chat API with AI responses
- ✅ Visitor tracking system
- ✅ Server running on `http://localhost:5001`

## Running the Application

### Terminal 1 - Frontend Dev Server
```bash
npm run dev
# Runs on http://localhost:3000
```

### Terminal 2 - Backend Server
```bash
cd backend
npm start
# Runs on http://localhost:5001
```

## API Endpoints

### Chat
- `POST /api/chat/session` - Create chat session
- `POST /api/chat` - Send message to AI
- `GET /api/chat/history/:sessionToken` - Get chat history

### Visitors
- `POST /api/visitors/track` - Track visitor
- `POST /api/visitors/duration` - Update duration
- `GET /api/visitors/stats` - Get analytics

### Health
- `GET /api/health` - Server status

## Database

Connected to PostgreSQL at `187.127.140.201:5432`
- Database: `mello_db`
- User: `mello_admin`
- Tables: users, chat_sessions, chat_messages, visitors, appointments, session_notes, billing

## Integrations

### Sarvam AI
- API Key: `sk_tmsuzqw3_IYKRzo7d8EuztdjqFo2aDx61`
- Model: Meta-Llama-3-8B-Instruct
- Powers the chat widget with AI responses

### Cloudinary
- Cloud Name: `dp7pklmjk`
- API Key: `311514862996324`
- For image uploads and management

## Frontend Environment Variables

```env
VITE_API_URL=http://localhost:5001
VITE_APP_NAME=MelloMinds
VITE_APP_ENV=development
```

## Backend Environment Variables

```env
DB_HOST=187.127.140.201
DB_PORT=5432
DB_NAME=mello_db
DB_USER=mello_admin
DB_PASSWORD=Mello@dbadmin
CLOUDINARY_CLOUD_NAME=dp7pklmjk
CLOUDINARY_API_KEY=311514862996324
CLOUDINARY_API_SECRET=At3MnLoh13CjxxrRjYAFz5E8NS8
SARVAM_API_KEY=sk_tmsuzqw3_IYKRzo7d8EuztdjqFo2aDx61
PORT=5001
NODE_ENV=development
```

## Next Steps

1. **Test the Chat Widget**
   - Open http://localhost:3000
   - Click the chat widget
   - Send a message to test AI integration

2. **Test API Endpoints**
   - Use Postman or curl to test endpoints
   - Check `/api/health` first

3. **Deploy**
   - Frontend: Vercel (already configured)
   - Backend: Render, Railway, or your preferred platform

## File Structure

```
mellominds/
├── frontend/                 # React frontend (old structure)
├── backend/                  # Express backend
│   ├── src/
│   │   ├── config/          # DB, Cloudinary, Sarvam configs
│   │   ├── db/              # Database initialization
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   └── index.js         # Entry point
│   ├── .env                 # Backend env vars
│   └── package.json
├── components/              # React components (root level)
├── App.tsx                  # Main app component
├── index.tsx                # Entry point
├── index.css                # Tailwind CSS
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── .env                     # Frontend env vars
├── package.json             # Frontend dependencies
└── vite.config.ts           # Vite config
```

## Troubleshooting

### Backend won't connect to database
- Check DB credentials in `.env`
- Verify PostgreSQL is running
- Check firewall/network access to `187.127.140.201:5432`

### Frontend can't reach backend
- Ensure backend is running on port 5001
- Check `VITE_API_URL` in `.env`
- Check CORS configuration in backend

### Chat widget not working
- Verify Sarvam AI API key is correct
- Check backend logs for errors
- Ensure chat session is created first

## Support

For issues or questions, check:
- Backend logs: Terminal running `npm start`
- Frontend logs: Browser console
- Database: Check PostgreSQL logs

---

**Status:** ✅ Ready for Development
**Frontend:** http://localhost:3000
**Backend:** http://localhost:5001
