# halo-challenge
Test automatiom framework implemented with the following Tools and Libs:

- Cypress
- Cucumber
- Javascript
- Cypress Dashboard

📋 Pre-requisites:

- Node should be installed. Commands to check node version:

node -v

npm -v

In case the user does not have it installed it, instructions to do it can be found here depending each OS: https://nodejs.org/en/download/package-manager

- Clone project

- Install dependencies package.json using the following command:

  
  $ npm install

Done ✅

The project is ready to be run using the following commands:

- Open Cypress gui command:
npm run cy:open 

- Run test headless mode command:
npm run cy:run 

Also Cucumber tags can be used to run the tests by specific groups:
- To run the tests associated with place an order functionality:
  npx cypress run --env tags=@placeOrder
- To run the tests associated to login page:
  npx cypress run --env tags=@login
