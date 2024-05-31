const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin= require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mjw1jf',
  e2e: {

    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins:[createEsbuildPlugin(config)],
      });

      on('task', {
        setUserEmail: (val) => {
            return (userEmail = val);
        },
    
        getUserEmail: () => {
            return userEmail;
        },

        setUserData: (val) => {
          return (userData = val);
        },
        
        getUserData: () => {
          return userData;
        },
    })
    
      on("file:preprocessor",bundler);
       addCucumberPreprocessorPlugin(on, config);
      return config;

    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://automationteststore.com/"
  },
});