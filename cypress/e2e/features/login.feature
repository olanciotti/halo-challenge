Feature: Login in Automation Test Store Page

        Background:
                Given I access to the Automation Test Store as guest

        @login
        Scenario: A new user registers and is able to log in after the registration is completed

                When I select "Login or register" option from the main navigation bar
                And I choose to Register Account option
                And I fill Your Personal details form section for new users
                And I fill Your Address form section for new users with the following values and click Continue button
                        | address         | country       | city   | region  | zipcode |
                        | No 12 Pt Street | United States | Auburn | Alabama | 36801   |
                And I fill the login details section with valid data
                        | password  | passwordconfirm |
                        | password1 | password1       |
                And I select the option "No" in order to suscribe to the Newsletter
                And I accept the terms and policies, and click Continue
                And I see the page that the account has been created successfully
                And I access to the Automation Test Store as guest
                And I select "Login or register" option from the main navigation bar
                Then I am able to log in with my new credentials

