# EvocLabz SaaS Platform

This is a full-stack JavaScript application built with:
- Next.js frontend (TypeScript + Tailwind CSS)
- Node.js/Express backend (TypeScript)
- PostgreSQL database (with Prisma ORM) for Users/Billing data
- MongoDB database (with Mongoose) for Orders/Logs data

## Project Structure

```
evoclabz/
├── client/                 # Next.js frontend
│   ├── pages/              # Next.js pages
│   ├── components/         # React components
│   ├── public/             # Static assets
│   ├── styles/             # CSS styles
│   ├── package.json
│   └── ...
├── server/                 # Node.js/Express backend
│   ├── src/
│   │   ├── models/         # Mongoose models (MongoDB)
│   │   ├── routes/         # API routes
│   │   └── index.ts        # Express server
│   ├── prisma/             # Prisma schema and migrations
│   ├── package.json
│   └── ...
├── .env                    # Environment variables
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL
- MongoDB

### Backend Setup
1. Navigate to the server directory: `cd server`
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file
4. Generate Prisma client: `npx prisma generate`
5. Run Prisma migrations: `npx prisma db push` (or `npx prisma migrate dev`)
6. Build the project: `npm run build`
7. Start the server: `npm run dev`

### Frontend Setup
1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
# Database URLs
POSTGRESQL_URL=postgresql://username:password@localhost:5432/evoclabz_postgres
MONGODB_URI=mongodb://localhost:27017/evoclabz_mongo

# Server Configuration
PORT=5000

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```

## Running the Application

1. Make sure both PostgreSQL and MongoDB are running
2. Start the backend server: `cd server && npm run dev`
3. In a new terminal, start the frontend: `cd client && npm run dev`
4. Access the frontend at `http://localhost:3000`
5. Access the backend API at `http://localhost:5000`"# EvocLabz" 
