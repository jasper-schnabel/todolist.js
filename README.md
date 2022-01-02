# Assignment 6 - The ToDo-List
## Learning Objectives
The goal of this assignment is to strengthen your knowledge about SQL. It includes CREATE TABLE, SELECT, INSERT, UPDATE 
and DELETE commands. <br/>
Furthermore, in this challenge, you will work with Express routes and multiple HTTP Requests (GET, POST, PUT, DELETE). 
<br/>

The goal is to create a small TODO-List application where you can create new tasks, set them as `Done` 
(i.e. tick them off), and delete tasks altogether.

_Note: If you want to test your sub-routes (`/todo/...`) before implementing the frontend, consider using Postman (https://learning.postman.com/docs/getting-started/introduction/) for this._


## Tasks
### Task 0 - Install the project
Run `npm install` and then run the script from your `package.json`. Find out where the port of your application is 
defined.

### Task 1 - Create table
Have a look at `Database.js` and fill in the `CREATE TABLE` statement. Your table should have the following fields:
* id = the primary key & identifier
* task = the name of the task
* priority = integer betwen 1 and 4
* done = boolean flag

You can get some helpful resources here (https://www.tutorialspoint.com/sqlite/index.htm) and 
here (https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/).

### Task 2 - Implement the SELECT query
Implement the "SELECT ... FROM ..." query to get all relevant rows for your todo list. Replace the static object array
in `routes/index.js`

### Task 3 - Implement /add
Implement the "INSERT INTO ..." query to create a new TODO list item in `routes/todo.js`

### Task 4 - Implement /delete
Implement the "DELETE FROM ..." query. Send the ID in the request body (like a POST request).

### Task 5 - Implement /done
Implement the "UPDATE todo SET ..." query. Send the ID in the request body (like a POST request). <br/>
_Bonus: If you want to be able to untick TODOs, send also the `done=true/false` inside the payload._

### Task 6 - Implement frontend dynamics
Write some Javascript functions to send your requests to the adjacent `/todo/...` route. Consider reloading the page 
manually or return a redirect response to the main page.

