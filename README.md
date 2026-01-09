# Intern Onboarding

## Day - 1

How a Web request works,
Whenever a user interacts with something on a website, say by clicking a link, submitting a form, etc., a web request is generated. The browser actually sends a request to the server and provides necessary information. The server processes the request and response, sending it to the browser again. The browser then interprets or presents the result to the user.

EX: User action - request sent - server processes - response returned - user sees the result.


## Day 2 – JavaScript Basics

The javascript code logic is simple. That explaining the persons adulthood by using their age if the age is under 18 the js code give output like "your are not an adult" else it gives "you are eligible as an adult".


let - variable
if, else - simple conditions

## Day 3 – Node.js & Express Basics

This task is a basic Node.js Express server created to understand how HTTP requests, routes, and responses work. It exposes simple endpoints to test server health, greeting messages, and current time.

Technologies Used

JavaScript
Node.js (LTS)
Express.js

Explaining API Endpoints

GET /health
Checks server health
Used for monitoring and testing
Returns a status message

GET /hello
Returns a simple greeting message
Used to test text responses

GET /time
Returns current server date and time
Demonstrates dynamic response handling

Example Output

/health - { "status": "OK" }
/hello - Hello from Express!
/time - Current server time

## Day 4 – User API with In-Memory Storage

This project demonstrates building REST API endpoints using Express.js and storing user data in memory.

Steps:
1.Install Node.js (LTS)
2.Open the project folder in terminal
3.Install dependencies
4.Start the server: node server.js
5.Server runs at: http://localhost:3000

Endpoints:

POST /add-user
Accepts a JSON object containing the user’s name and email, and adds the user to the server.

GET /users
Returns the list of all users currently stored on the server.

Data Storage
User details are stored in a temporary in-memory array.
This data is not persistent and will be cleared automatically when the server is restarted.

Learning Outcome:
Built POST and GET APIs using Express.js, stored user data in server memory, and tested the APIs using terminal commands.





