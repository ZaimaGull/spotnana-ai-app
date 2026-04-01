# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). There's a combination of React.jsx and JavaScript.js being used.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://create-react-app.dev/docs/running-tests/) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.

### `npm run eject`

**Note: Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# AI Prompt App

## Overview

This is a React-based web application that allows users to input prompts, send them to an AI API, and display responses dynamically. A chat history is built to save user prompts and responses.

## Features

- Prompt input + submit
- AI-generated responses
- Loading & error states
- Chat history (with localStorage)
- Clear button

## Tech Stack

- React
- OpenRouter API

## Setup

1. Clone repo
2. Run:
   `npm install`
3. Add `.env`:
   REACT_APP_OPENROUTER_API_KEY=your_api_key
   **Note:** To locate the api key, you want to go to open router url and create a new key, then update the `.env` file appropriately.
4. Start:
   `npm start`

## Notes

This project was built as part of a frontend technical assessment for Spotnana.

## API Used

This app uses the Open Router API for generating AI responses.
