# Mainstack Assessment

* Task 1 - Design Test (Build the dashboard)

## Project Links

* Live Link: <https://mainstack-tng.netlify.app/>
* README.md: <https://github.com/Thenextgen1/Mainstack-assessment/blob/main/README.md>

## Requirements

NodeJs version 16 or newer installed on your computer.

## Installation

Clone or download the repository as a zip folder

* To run, on your command line navigate into project folder; then start with npm.

```JavaScript
cd Mainstack-assessment
npm start
```

## Usage

* Task 1 - To view the dashboard:

```JavaScript
localhost:3000/desiredpage
```

## Dependencies Used

The following dependencies were required and used for the assessment:

* TypeScript - To increase code readability, static type checking.
* Chart.Js - Used to build the line chart as well as the doughnut chart in the dashboard.
* React-chartjs-2 - Provides chart.js support for this react application.
* React-router-dom - Used for routing between pages.
* Chartjs-adapter-moment: Used for formatting the time string got from the api provided.
* React-query - Used for server state management and caching.
* React-icons - Icon library used in the web app.

## What can be improved about this application

* For the api used, the graph_data.views object should be an array of objects instead of just a singular object.
It should be in the format [{time: '', values: ''}, {time: '', values: ''}...] and not {time: values}
* Assets for the countries flag should be provided in the api if possible.
