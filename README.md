# halo-challenge
Test automatiom framework implemented with the following Tools and Libs:

- Cypress
- Cucumber
- Javascript
- Cypress Dashboard

📋 Pre-requisites:

- Install Node using the following command:
  
  node -v

- Install NPM using the following command:
  
  npm -v

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
  npx cypress run --env tags=@placeOrderWithUser
- To run the tests associated to login page:
  npx cypress run --env tags=@login
