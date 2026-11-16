@ui @login
Feature: Login
    As a customer
    I want to log in
    So that I can buy products

    Background:
        Given the user is on the login page

    @smoke
    Scenario: Successful login with  valid credentials
        When the user logs in with valid credentials
        Then the products page should be displayed

    @regression
    Scenario: Locked out user cennot log in
        When the user logs in as "locked_out_user" with password "secret_sauce"
        Then the error "Epic sadface: Sorry, this user has been locked out." should be displayed

    @regression
    Scenario Outline: Login fails with invalid credentials
        When the user logs in as "<username>" with password "<password>"
        Then the error "<error>" should be displayed

        Examples:
            | username      | password     | error                                                                     |
            | wrong_user    | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            | standard_user |              | Epic sadface: Password is required                                        |
            |               | secret_sauce | Epic sadface: Username is required                                        |