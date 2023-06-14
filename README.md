# Setup

To get this project up and running, please clone the project 

```
git clone https://github.com/quyet-v/CodeChallenge.git

```

After cloning the project, please navigate to the cloned directory and install all the dependencies. 

```
npm install

```

Before serving the application, please make sure to run the mock API by running the collowing command.


```
npm run server

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

For this project, I only implemented unit test for the cart service.

## Testing authentication service

In my authentication service, I have 7 methods in total and for each of those method I would create one or more unit tests to test the functionality to make sure that it is working as expected.

For my getUsers method, I make a HTTP request using HttpClient which will need to be mocked. A unit test could be developed to make sure that the users array returned from the Observable matches an expected users array. 

I have a method called checkCredentials that takes a LoginAttempt and an array of users and returns the User object if attempt was successful. So a unit test that could be developed is to test for when the user provides correct customer credentials and check to see if the returned User object is not undefined and make sure that the role is customer. Another unit test could be developed for admin credentials as well, but instead of checking for customer role, check for admin role. Lastly, a unit test could be developed to test for when invalid credentials are provided as parameters. The test would be checking to see if the returned User object is undefined. This method of credential checking is not ideal and I would be doing this on the backend, but since I do not have a backend this is what I decided to do.

Another method I could test is my login method, this method uses the checkCredentials method and generates a token, it will return true if login was successful and false if not. So a unit test could be developed to test for when invalid credentials are passed in and test if it returns false. Another unit test could be developed but testing to for valid credentials.

I have a method called generateToken which basically just encrypts a User object to simulate a "JWT" token. Normally this is done on the backend, but since I dont have one this will do. A unit test could be developed to pass in a valid User object and test to see if the returned string is not empty. Another unit test could be developed with undefined passed into the method and check if the returned string is empty. 

Lastly, I have a method called decodeToken which just takes a token represented as a string and decodes it to get back a User object. A unit test could be developed to test for when a valid token is passed as parameter to the method, it will then check to see if the returned User object is the same as the object before it was encrypted. Another case is when the passed in token is null, a unit test could be developed to check if the returned value is undefined.

There are a few more methods that I could develop unit tests for but they are quite trivial and the above methods are the main ones.


