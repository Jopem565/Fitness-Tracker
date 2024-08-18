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

Replace your_mongodb_connection_string with your actual MongoDB connection string, and your_jwt_secret_key with a secret key for JWT.

4. **Start the Development Server**:

Navigate to the server directory and start the backend server:

```
cd ../server
npm run dev
In a new terminal, navigate to the client directory and start the frontend:
```
```
cd ../client
npm start
The application will now be running locally, and you can access it in your web browser at:
```

```
http://localhost:3000
```

##Usage

-**Register**: Create a new user account by filling out the registration form.
-**Login**: Use your credentials to log in to your account.
-**Add Workout**: Navigate to the workout page to log a new workout session by selecting exercises, duration, and additional details.
-**View Workouts**: Access the dashboard to view all your logged workouts and track your fitness progress.
-**Edit/Delete Workouts**: Update or remove any workout entries as needed.
