## pworkout App Documentation

This document outlines the functionality and implementation of the pworkout application, a web-based fitness tracker designed to help users log and monitor their workout routines.

### Project Structure

The pworkout application consists of the following components:

- **Frontend:** Built with React.js, this part handles user interactions, rendering, and data visualization.
- **Backend:** A Node.js server with Express.js framework, responsible for handling data requests, authentication, and database interactions.
- **Database:** MongoDB used to store user data, workouts, and other relevant information.

### Components

#### 1. Dashboard.js

**Functionality:**
- Displays a list of the user's logged workouts in a table format.
- Allows users to log new exercises using the `LogExercise` component.
- Fetches workouts from the backend based on the user's ID.
- Formats dates and times for display.

**Implementation:**
- Uses the `useEffect` hook to fetch workouts on component mount.
- Uses state variables `workouts`, `showForm` to manage data and form visibility.
- `formatDate` and `formatTime` functions handle date and time formatting.
- Uses `axios` to make API calls to the backend.
- Uses `jwtDecode` to extract the user's ID from the JWT token stored in localStorage.

#### 2. Footer.js

**Functionality:**
- Displays a simple footer with the application's name and copyright information.

**Implementation:**
- Basic React component with static content.
- Includes optional CSS styling.

#### 3. Home.js

**Functionality:**
- Displays a landing page for the application.
- Includes a welcome message and a series of workout cards that link to external resources for each workout type.

**Implementation:**
- Uses `Link` component to navigate to external URLs for each workout type.
- Includes styling for the card container.

#### 4. LogExercise.js

**Functionality:**
- Provides a form for users to log their workouts, including exercise type, duration, intensity, and calories burned.
- Submits the workout data to the backend.

**Implementation:**
- Uses state variables to manage form data.
- Uses the `handleSubmit` function to submit the workout data.
- Uses `axios` to make POST requests to the backend.
- Uses `jwtDecode` to extract the user's ID from the JWT token stored in localStorage.

#### 5. Login.js

**Functionality:**
- Allows users to log in to the application using their email and password.
- Authenticates the user with the backend.
- Redirects to the dashboard upon successful login.

**Implementation:**
- Uses state variables to manage email and password inputs.
- Uses the `handleSubmit` function to submit the login credentials.
- Uses `axios` to make POST requests to the backend.
- Stores the JWT token in localStorage upon successful login.
- Uses `useNavigate` hook to redirect to the dashboard.

#### 6. Navbar.js

**Functionality:**
- Provides navigation links for the application, including Home, Signup, and Login.
- Displays the user's name if logged in.

**Implementation:**
- Uses `Link` component to create navigation links.
- Retrieves the user's name from localStorage if available.
- Includes optional CSS styling.

#### 7. Signup.js

**Functionality:**
- Allows users to create a new account with the application using their name, email, and password.
- Creates a new user account on the backend.
- Provides feedback to the user on signup success or failure.

**Implementation:**
- Uses state variables to manage name, email, and password inputs.
- Uses the `handleSubmit` function to submit the signup credentials.
- Uses `axios` to make POST requests to the backend.
- Displays success or error messages to the user.

#### 8. Navbar2.js

**Functionality:**
- Provides navigation links for the application, including Home and "Log Exercise".
- Displays the user's name if logged in.

**Implementation:**
- Uses `Link` component to create navigation links.
- Retrieves the user's name from localStorage if available.
- Includes optional CSS styling.
- Includes a "Log Exercise" button that triggers the `onLogExerciseClick` prop function.

### Backend Functionality

The backend server provides the following functionalities:

- **User Authentication:**
    - Handles user registration and login requests.
    - Generates and issues JWT tokens for authenticated users.
- **Workout Management:**
    - Accepts workout data from the frontend.
    - Stores the workout information in the database, associating it with the logged-in user.
    - Retrieves workout data for specific users.

### Technologies Used

- **Frontend:** React.js, Axios, JWT Decode
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

### Deployment

The pworkout application can be deployed to a cloud platform such as Heroku or AWS. 

### Conclusion

The pworkout application provides a comprehensive platform for fitness tracking, allowing users to log their workouts and monitor their progress over time. The application leverages modern technologies like React.js and MongoDB to ensure a seamless and efficient user experience.
