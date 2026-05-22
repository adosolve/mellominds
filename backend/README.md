# MelloMinds Backend API

A comprehensive backend API for the MelloMinds therapy practice management platform.

## Features

- **Chat API** - AI-powered chat with Sarvam AI integration
- **Visitor Tracking** - Track website visitors and analytics
- **Database** - PostgreSQL with comprehensive schema
- **Authentication** - JWT-based authentication ready
- **File Upload** - Cloudinary integration for image uploads
- **CORS** - Configured for frontend communication

## Setup

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file with the following:

```env
# Database Configuration
DB_HOST=187.127.140.201
DB_PORT=5432
DB_NAME=mello_db
DB_USER=mello_admin
DB_PASSWORD=Mello@dbadmin

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=dp7pklmjk
CLOUDINARY_API_KEY=311514862996324
CLOUDINARY_API_SECRET=At3MnLoh13CjxxrRjYAFz5E8NS8

# Sarvam AI Configuration
SARVAM_API_KEY=sk_tmsuzqw3_IYKRzo7d8EuztdjqFo2aDx61

# Server Configuration
PORT=5001
NODE_ENV=development
```

### Running the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will start on `http://localhost:5001`

## API Endpoints

### Chat API

- `POST /api/chat/session` - Create or get chat session
- `POST /api/chat` - Send message and get AI response
- `GET /api/chat/history/:sessionToken` - Get chat history

### Visitor Tracking

- `POST /api/visitors/track` - Track visitor
- `POST /api/visitors/duration` - Update visitor duration
- `GET /api/visitors/stats` - Get visitor statistics

### Health Check

- `GET /api/health` - Server health status

## Database Schema

### Tables

- **users** - User profiles and therapist information
- **chat_sessions** - Chat session management
- **chat_messages** - Chat message history
- **visitors** - Website visitor tracking
- **appointments** - Therapy appointments
- **session_notes** - Therapy session notes
- **billing** - Billing and payment records

## Technologies

- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Sarvam AI** - AI chat integration
- **Cloudinary** - Image hosting
- **JWT** - Authentication
- **Helmet** - Security headers
- **CORS** - Cross-origin requests

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error message",
  "status": 400
}
```

## Security

- Helmet.js for security headers
- CORS configured for frontend
- Environment variables for sensitive data
- SQL injection prevention with parameterized queries
- Password hashing with bcryptjs

## Development

### Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── db/              # Database initialization
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── index.js         # Entry point
├── .env                 # Environment variables
└── package.json         # Dependencies
```

## License

ISC
