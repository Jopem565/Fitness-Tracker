# Fitness Tracker


## Introduction

The Fitness Tracker is a web application that allows users to log and track their workouts, manage their fitness goals, and monitor progress over time. This project is built using React for the frontend and Node.js/Express for the backend, with MongoDB as the database.

## Features

- **User Authentication**: Secure registration and login using JWT.
- **Workout Tracking**: Log workouts with details such as exercise type, duration, and calories burned.
- **Dashboard**: View a summary of your workouts and track progress over time.
- **CRUD Operations**: Create, read, update, and delete workout entries.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS, Bootstrap
- **Version Control**: Git, GitHub

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

### Setup

1. **Clone the repository**:

   ```
   git clone https://github.com/your-username/fitness-tracker.git
   cd fitness-tracker
   ```
   
2. **Install dependencies for both client and server**:

```
 cd client
 npm install
 cd ../server
 npm install
```

3.  **Configure Environment Variables**:

   Create a `.env` file in the `server` directory with the following content:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
