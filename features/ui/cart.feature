@ui @cart
Feature: Add to cart

    Background:
        Given the user is logged in

    @smoke
    Scenario: Add one product to cart
        When the user adds "Sauce Labs Backpack" product
        Then the cart badge shows "1"

    @regression
    Scenario: Add a product and remove a product
        When the user adds "Sauce Labs Bike Light" product
        And the user removes "Sauce Labs Bike Light" product
        Then the cart badge disappears
    
    @regression
    Scenario Outline: Added product appears in the cart
        When the user adds "<product_name>" product
        And the user opens the cart
        Then the cart shows "<product_name>"

        Examples:
            | product_name             | 
            | Sauce Labs Onesie        | 
            | Sauce Labs Fleece Jacket | 
            | Sauce Labs Bike Light    | 

