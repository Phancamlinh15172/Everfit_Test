Feature: Login
    As an employee
    I want to login into the system
    Background:
        Given The user opens login page

    Scenario Outline: The user can successfully log in to the system
        When The user enters the username "<username>"
        And The user enters the password "<password>"
        And The user clicks on the login button
        Then The user will be navigated to Home page
        Examples:
            | username                |  | password     |
            | standard_user           |  | secret_sauce |
            | locked_out_user         |  | secret_sauce |
            | problem_user            |  | secret_sauce |
            | error_user              |  | secret_sauce |
            | performance_glitch_user |  | secret_sauce |

    Scenario: Login fail with empty password
        When The user enters the username "standard_user"
        And The user clicks on the login button
        Then The user will receive a error message with content "Password is required"

    Scenario: Login fail with empty username
        And The user enters the password "secret_sauce"
        And The user clicks on the login button
        Then The user will receive a error message with content "Username is required"

    Scenario Outline: Login fail with invalid username and pasword
        When The user enters "<username>" into the Username field and "<password>" into the Password field
        And The user clicks on the login button
        Then The user will receive a error message with content "<error>"
        Examples:
            | username          |  | password      |  | error                                                       |
            | standard_user     |  | incorrectPass |  | Username and password do not match any user in this service |
            | incorrectUserName |  | secret_sauce  |  | Username and password do not match any user in this service |
            | incorrectUserName |  | incorrectPass |  | Username and password do not match any user in this service |