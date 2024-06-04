# Netflix Clone

This project is a web application inspired by the popular streaming service Netflix.
It allows users to browse and potentially watch trailers for movies and TV shows.
## Features
* User registration and login
* Browse content by category or search by title
* Display movie and TV show details with trailers and descriptions.
* Play videos with basic playback controls
    

Technologies Used

* Front-end: React, JavaScript, CSS
* Other: Firebase (for authentication)

## Setup Instructions

1. Clone the repository:

        git clone https://github.com/vermadhruv02/Netfilx-Clone

2. Install dependencies:

        cd Netfilx-Clone
        npm i

3. Create a new file named .env in the root directory of your React project.
4. Paste the following lines into the .env file, replacing the placeholders with your actual Firebase credentials  and TMDB API key:

        REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
        REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
        REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
        REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
        REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
        REACT_APP_FIREBASE_THE_MOVIE_DB=YOUR_TMDB_API_KEY 
    
5.  Run the application:

        npm run dev
