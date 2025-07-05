# ReactNative

## Project Overview

This repository contains a collection of React Native projects demonstrating various functionalities and libraries. The projects range from simple UI components and state management examples to more complex applications like a video diary and a weather app.

## Repository Contents

The repository is structured into several subdirectories, each representing a distinct React Native project. Here's a breakdown:

*   **EngineClearance:** Demonstrates basic React Native setup with Expo. Includes a simple form input component.
*   **ExpenseApp:**  A basic expense tracking application utilizing React Navigation, context API, and data persistence with Firebase.
*   **FindEV:** An authentication flow (login/register) with theme and language customization using AsyncStorage for persistence.
*   **FlappyBirdClone:** A clone of the Flappy Bird game using `react-native-game-engine` and `matter-js`.
*   **GuessTheNumber:** A number guessing game built with React Native components.
*   **HowOldAmI:** A simple app that calculates and displays the user's age in seconds.
*   **LoginRegister:**  A basic Login/Register app
*   **mp3Converter:** A tool to convert YouTube links to MP3 format using a RapidAPI.
*   **Places.io:** A simple places app that saves the favorite places
*   **QR\_Scanner:** A basic QR code scanner application.
*   **RecipeBook:** A recipe book app
*   **RubiksCube:** A simple UI for simulating a Rubik's Cube face using React Native.
*   **Styles.js:** Style template
*   **TanstackQuery:** Demonstrates the usage of TanStack Query for data fetching and state management in a movie listing application.
*   **ToDo:** A simple to-do list application.
*   **VideoDiaryApp:** A video diary application, that lets you to save the videos and you can crop them before.
*   **Weather\_App:** A simple weather application.
*   **zustandTutorial:** A simple state management example with zustand.

## Features and Functionality

The features and functionalities vary depending on the specific project within the repository. Here's a summary:

*   **UI Components:**  Reusable components like buttons, inputs, headers, and list items.
*   **Navigation:** Implementation of React Navigation for screen transitions and navigation flows (e.g., ExpenseApp, FindEV, Places.io).
*   **State Management:** Demonstrations of different state management techniques, including:
    *   Context API (e.g., ExpenseApp, FindEV)
    *   Recoil (e.g., recoilTutorial)
    *   Zustand (e.g., zustandTutorial)
    *   React Query (e.g., TanstackQuery, VideoDiaryApp)
*   **Data Persistence:** Usage of `AsyncStorage` for persisting data locally (e.g., FindEV). Also demonstration for data persistence with Firebase and SQLite.
*   **API Integration:** Fetching data from external APIs (e.g., TanstackQuery for movie data, Weather\_App for weather information, mp3Converter for converting Youtube links to mp3 links).
*   **Camera & Video Access:** Integration with the camera and video library for applications like QR\_Scanner and VideoDiaryApp.
*   **Background tasks:** Implemented background tasks with help of FFmpeg-Kit in VideoDiaryApp project to crop the videos in background.
*   **Location Access:** Getting the location info with permission and displaying in the components.

## Technology Stack

*   React Native
*   Expo
*   React Navigation
*   React Hooks
*   React Context API
*   Recoil
*   Zustand
*   React Query
*   `react-native-game-engine`
*   `matter-js`
*   `expo-av`
*   `expo-image-picker`
*   `expo-location`
*   `expo-sqlite`
*   `react-native-vector-icons`
*   `react-native-vector-icons/Ionicons`
*   `ffmpeg-kit-react-native`
*   `react-native-reanimated`
*   `react-native-gesture-handler`
*   `expo-router`
*   `react-hook-form`
*   `@hookform/resolvers`
*   `expo-status-bar`
*   `axios`
*   `moment`
*   `react-native-openanything`
*   `react-native-responsive-screen`
*   `react-native-async-storage/async-storage`

## Prerequisites

*   Node.js (>=18)
*   npm or yarn
*   Expo CLI (`npm install -g expo-cli`)
*   A smartphone or emulator with Expo Go installed

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/onurakyildiz58/ReactNative.git
    ```

2.  Navigate to the desired project directory (e.g., `ExpenseApp`):

    ```bash
    cd ReactNative/ExpenseApp
    ```

3.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

## Usage Guide

1.  Start the Expo development server:

    ```bash
    npm start  # or yarn start
    ```

2.  Scan the QR code with the Expo Go app on your phone, or run the app in an emulator.

    *Some projects may require additional setup:*

    *   **ExpenseApp:** Requires setting up Firebase and configuring the Firebase credentials.
    *   **FindEV:** Requires setting up Firebase Authentication.
    *   **Weather\_App:** Requires an OpenWeatherMap API key.  Set the `WEATHER_API_KEY` environment variable in your `.env` file.
    *   **mp3Converter:** Requires a RapidAPI key from YouTube to MP3 service.
    *   **VideoDiaryApp:** Requires FFmpeg-Kit libraries.

## API Documentation

*   **TanstackQuery Project:** Uses The Movie Database (TMDb) API. Refer to the TMDb API documentation for details on available endpoints and data structures.
*   **Weather\_App Project:** Uses the OpenWeatherMap API.
*   **mp3Converter Project:** Uses the RapidAPI link.

## Contributing Guidelines

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and test thoroughly.
4.  Submit a pull request with a clear description of your changes.

## License Information

No license specified. All rights reserved.

## Contact/Support Information

For questions or support, please contact onurakyildiz58@gmail.com.
```
