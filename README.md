
# Repositories API

The project allows users to consult repositories from any organization in the following cases:

-   Repositories with more than 5 stars.
-   Last 5 updated repositories.
-   Sum of all repository stars.
-   The top 5 repositories in the organization.
-   Repositories sorted alphabetically excluding repositories with names started with "h".

The project was done using the Github's public API with TypeScript, NodeJs, and Express.js.
  
 
## Architecture

### Folder structure
```
project-root/ 
├── controllers / # Folder 
├── dataAccess # Folder with data access utilities
├── models # Folder with the interfaces to represent the data structure 
├── routes # Folder with the defined app endpoints
├── services # Folder with services that have specific business logic
├── specs/ # Folder with all project specifications 
│ ├── fixtures # Folder with specs fixtures
├── .gitignore # Git ignore file 
├── README.md # The main README file 
├── app.ts # Main JavaScript file with the endpoints
├── package.json # Node.js package configuration file
├── nodemon.json # Nodemon configuration file
├── tsconfig.json # TypeScript configuration file
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
 - Get the top 5 repositories: `http://localhost:3000/{org}/topRepos`
 - Get repositories sorted alphabetically: `http://localhost:3000/{org}/listAlphabetically`

The parameter `{org}` should be the organization name that you want to consult, example: `http://localhost:3000/StackBuilders/popularRepos`
