
# Stack Builders repositories API

The project allows users to consult the Stack Builders repositories in the following cases:

-   Repositories with more than 5 stars.
-   Last 5 updated repositories.
-   Sum of all repository stars.

The project was done using the Github's public API with JavaScript, NodeJs, and Express.js.
  
 
## Architecture

### Folder structure
```
project-root/ 
├── specs/ # Folder with all project specifications 
├── utils/ # Folder with reusable functions
├── .gitignore # Git ignore file 
├── README.md # The main README file 
├── app.js # Main JavaScript file with the endpoints
├── package.json # Node.js package configuration file
└── .eslintrc.json # ESLint rules configuration file 
```

### Used libraries
- Axios
- Express
- Nodemon
- Jest
- Supertest

## Approach and Methodology

The project was designed with TDD methodology (Test Driven Domain).

## Quick start

### Install dependencies

 1. Run the command: `npm init`
 2. Run: `npm install`
 3. To install jest run: `npm  install --save-dev jest`

### Run tests

 - Use the command: `npm run test`

 ### Run project

 - Run development: `npm run dev`
 - Go to localhost:3000 on your browser
 
 ### How to use endpoints
 
 - Get repositories with more than 5 stars : `http://localhost:3000/{org}/popularRepos`
 - Get last 5 updated repositories: `http://localhost:3000/{org}/lastUpdatedRepos`
 - Get sum of all repository stars: `http://localhost:3000/{org}/totalStars`

The parameter `{org}` should be the organization name that you want to consult, example: `http://localhost:3000/StackBuilders/popularRepos`
