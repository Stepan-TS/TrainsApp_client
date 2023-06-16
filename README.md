# TravelByTrain
TravelByTrain is a web application built using React, TypeScript, SCSS, Axios, Node.js, Express.js, and MySQL. It provides a user-friendly interface for searching and displaying train routes based on the user's preferred cities of departure and arrival.

## Features
Home Page: The home page displays a header with the logo and a navigation bar. It also includes a form with two inputs where users can specify their desired cities of departure and arrival.

Search Results: After submitting the form on the home page, users are navigated to the result page. Here, they can view the train routes available based on the specified cities. The train data is retrieved from the database and displayed in chronological order, starting from today and spanning the next seven days.

Refresh Button: Users have the option to refresh the search results by clicking the refresh button. This action triggers the display of the form to update the cities of departure and arrival.

Navigation: Users can easily return to the home page by clicking on the logo or the home link in the navigation bar.

Add New Train: The application also provides an "Add New Train" page, where users can submit details of new train routes to be added to the database.

## Technologies Used
React
TypeScript
SCSS
Axios
Node.js
Express.js
MySQL

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
