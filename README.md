# RESTful API using NODE JS, MySQL, Express.
## Methods: GET, POST, PUT, DELETE

##### Applications preferred:
* Code Editor - [Visual Studio Code](https://code.visualstudio.com/)
* Browser - Google Chrome
* LAMP Stack - [XAMPP](https://www.apachefriends.org/)
* Command Line Interface - [Git Bash](https://git-scm.com/downloads)

##### Commands:

`npm init` - Use a cmd or git bash and navigate to the project folder. Answer the questions accordingly.

* Installing Modules

`npm install --save express`

`npm install --save body-parser`

`npm install --save bootstrap`

`npm install --save cors`

`npm install --save ejs`

`npm install --save jquery`

`npm install --save method-override`

`npm install --save mysql`

`npm install --save tether`

or (All at once)

`npm install --save express body-parser bootstrap cors ejs jquery method-override mysql tether`

* Setting up MySQL Connection. (See dbconnection.js inside core folder)
```
const mysql         =   require('mysql'); // Using the mysql module.
const connection    =   mysql.createConnection({ // Creating the connection with appropriate details.
                            host:'localhost', 
                            user:'root', // The one used for logging in using phpmyadmin
                            password:'', 
                            database:'cars' // The cars database has to be created before we start the application. Link to phpmyadmin will usually live on 'http://localhost:****/phpmyadmin' (This will change according to the software used. I used XAMPP.)
                        });
                        
module.exports      =   connection;
```
* Create a Database 'cars' with the help of phpmyadmin.

Go to **Import** tab and choose the **cars.sql** file inside core folder. Click Go.

This will create two tables, **new_cars** and **used_cars** inside the **cars** database. 

Make sure to use the exact names!!! (Different names can be used but need to edit other files as well)

* Fire the node application
Inside the project folder or where the app.js file resides,

`node app`

* Open XAMPP

  Start the Apache and Mysql Modules.

* Open Google Chrome

  Navigate to http://localhost:5000
