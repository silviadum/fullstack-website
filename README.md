# Full-Stack Website

A full-stack web application built with **React**, **Node.js / Express**, and **MongoDB**. It implements user authentication (secure login / logout) and image upload functionality.

## Features

- User authentication with secure login and logout
- Password hashing with bcrypt
- Image upload via drag-and-drop
- React frontend with client-side routing
- REST API backend connected to MongoDB

## Tech Stack

| Layer    | Technologies                                   |
| -------- | ---------------------------------------------- |
| Frontend | React, React Router, styled-components         |
| Backend  | Node.js, Express, Mongoose                     |
| Database | MongoDB                                        |
| Auth     | bcrypt                                          |

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended) and npm
- A running [MongoDB](https://www.mongodb.com/) instance (local or MongoDB Atlas)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/silviadum/fullstack-website.git
cd fullstack-website
```

### 2. Backend setup

```bash
cd backend
npm install dotenv nodemon bcrypt express mongoose
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
# or, with auto-reload during development:
npx nodemon
```

### 3. Frontend setup

```bash
cd frontend
npm install dotenv react-drag-drop-files styled-components react-router-dom react-scripts
```

Create a `.env` file in the `frontend` folder if you need to point to the API:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm start
```

The app runs at `http://localhost:3000`.

## Test Login Credentials

To test the logout button locally, use:

- **Username:** `abc@gmail.com`
- **Password:** `12345`

## Notes

- Make sure the backend is running before starting the frontend.
- Update the `.env` values to match your own MongoDB connection and ports.
