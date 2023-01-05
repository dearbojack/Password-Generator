# Module 5 Challenge: Password Generator

## Overview
 
Create an application that an employee can use to generate a random password based on criteria they’ve selected.

## Instructions

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Grading Requirements

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * The challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Solution

1. Ask for user input of preferred password length (10-64), and validate user input;
2. Ask for user input of preferred character types (1-4), and validate user input;
3. Generate password based on user input:
   1. if user prefered password length > available characters, ask for user input again;
   2. if user prefered password length <= available characters,
      1. create an array of user selected number of character types;
      2. merge the array elements into an array of all available characters;
      3. get user selected number of random elements from the array;
      4. use `array.join()` to concat the array elements into password format
4. write password value
5. update html

## Deployment
- GitHub repository: https://github.com/dearbojack/Password-Generator
- Deployed GitHub page: https://dearbojack.github.io/Password-Generator
