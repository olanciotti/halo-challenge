Feature: Place Order in Automation Test Store page

    Background:
        Given I access to the Automation Test Store as guest

    Scenario: A user should be able to place an order in the cart as a guest

        When I select "Fragrance" option from the products navigation bar
        And I add a product that contains "Perfume" to the cart
        And I complete Estimate Shipping & Taxes section
            | countrycode | country       | state   |
            | 223         | United States | Alabama |
        And I proceed with the checkout as guest
        And I fill Your Personal details form section
        And I fill Your Address form section with the following values and click Continue button
            | address         | country       | city   | region  | zipcode |
            | No 12 Pt Street | United States | Auburn | Alabama | 36801   |
        And I proceed with the checkout confirmation
        Then I see the order confirmation page as guest user

    Scenario: A user should be able to place an order in the cart logged in

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
        And I select "Fragrance" option from the products navigation bar
        And I add a product that contains "Perfume" to the cart
        And I complete Estimate Shipping & Taxes section
            | countrycode | country       | state   |
            | 223         | United States | Alabama |
        And I proceed with the checkout logged in
        And I proceed with the checkout confirmation
        Then I see the order confirmation page as logged in user

    Scenario: A user should be able to place an order after updating the item quantity in the cart as a guest

            When I select "Fragrance" option from the products navigation bar
            And I add a product that contains "Perfume" to the cart
            And I increase the first product quantity to "3"
            And I complete Estimate Shipping & Taxes section
                | countrycode | country       | state   |
                | 223         | United States | Alabama |
            And I proceed with the checkout as guest
            And I fill Your Personal details form section
            And I fill Your Address form section with the following values and click Continue button
                | address         | country       | city   | region  | zipcode |
                | No 12 Pt Street | United States | Auburn | Alabama | 36801   |
            And I proceed with the checkout confirmation
            Then I see the order confirmation page as guest user

    Scenario: A user should be able to place an order after updating the item quantity in the cart logged in

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
        And I select "Fragrance" option from the products navigation bar
        And I add a product that contains "Perfume" to the cart
        And I increase the first product quantity to "4"
        And I complete Estimate Shipping & Taxes section
            | countrycode | country       | state   |
            | 223         | United States | Alabama |
        And I proceed with the checkout logged in
        And I proceed with the checkout confirmation
        Then I see the order confirmation page as logged in user

