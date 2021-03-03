# Scrappy App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development Design

This project is organized under the smart and dumb component approach where components CommitList is nested to CommitPage, the difference between these is that CommitList has only one responsibility which is 'presentational and CommitPage has the responsibility of tracking states and retrieve data.

it manages its own services to retrieve data from the API in order to keep a single responsibility between objects.

## npm packages

- [bootstrap](https://getbootstrap.com/docs/4.1/content/tables/).
- [react-toastify](https://www.npmjs.com/package/react-toastify).

## Instructions

1. Run `npm install` in the inside of the project folder with your terminal to get all the dependency packages of this App.
2. Run `npm start` which runs the app in the development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. This is going to show you the list of commits done in this project by default.

if you want to change the repository, you must stop the app and go through `Package.json` file and edit the script, start and replace the values of the variables of: `REACT_APP_API_USER`={git_user} `REACT_APP_API_PROJECT`={git_repository} by default they are set up for REACT_APP_API_USER=`jrom20` REACT_APP_API_PROJECT=`ScrapperApp`, then run it again with `npm start` command
