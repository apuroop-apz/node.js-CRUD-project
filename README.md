# RESTful API using NODE JS, MySQL, Express.
## Methods: GET, POST, PUT, DELETE

##### Applications required:
* Code Editor - [Visual Studio Code](https://code.visualstudio.com/)
* Browser - Google Chrome
* LAMP Stack - [XAMPP](https://www.apachefriends.org/)

##### Commands:

`npm init` - Inside the project folder. Answer the questions accordingly.

* Installing Modules

`npm install -g express`

`npm install --save body-parser`

`npm install --save bootstrap`

`npm install --save cors`

`npm install --save ejs`

`npm install --save jquery`

`npm install --save method-override`

`npm install --save mysql`

`npm install --save tether`

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

* Fire the node application
Inside the project folder,

`node app`
