const express        = require('express');
const router         = express.Router();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const Cars           = require('./cars');
const siteTitle      = "807 Dealers"; //Shop name.
const baseURL        = "http://localhost:5000"; //Change it if you're using a different port.

router.use(methodOverride('_method'));

//----------------------------Getting every CAR from the database.-----------------------------------//
router.get('/', (req, res) => {
    Cars.getEveryCarAvailable((err, result) => {
        if(err){
            res.json(err);
        } else {
            res.render('pages/index', {
                siteTitle : siteTitle,
                pageTitle : "All Cars",
                items : result
            });
        }
        res.end();
    });
});
//---------------------------------------------------------------------------------------------------//
//------------------------------------------ NEW CARS \/ --------------------------------------------//
//---------------------------------------------------------------------------------------------------//

//----------------------------------Getting the data from database.----------------------------------//
//----------------------------Getting all the new cars from the Database.----------------------------//

router.get('/newcars', (req, res) => {
    Cars.getAllNewCars((err, result) => {
        if(err){
            res.json(err);
        } else {
            res.render('pages/new_cars', {
                siteTitle : siteTitle,
                pageTitle : "New Cars",
                items : result
            });
        }
    });
});

router.get('/newcars/:id', (req, res) => { 
    Cars.getOneNewCarById(req.params.id, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.render('pages/new_car_details', {
                siteTitle : siteTitle,
                pageTitle : 'New Car',
                items : result
            });
        }
    });
});

//----------------------------------Posting the data to database.------------------------------------//
//------------------Getting the form from an external ejs file 'add_new_car.ejs'.--------------------//
router.get('/addnewcars', (req, res) => {
    res.render('pages/add_new_car', {
        siteTitle : siteTitle,
        pageTitle : "Add New Car",
        items : ''
    });
});

//-------------Inserting the values given by the user into the database. Adding a NEW CAR.-----------//
router.post('/addnewcars', (req, res, next) => {
    Cars.addNewCar(req.body, (err,count) => {
        if(err) {
            res.json(err);
        } else {
            res.redirect(baseURL);
        }
    });
});

//----------------------------------Updating the data.-----------------------------------------------//
//---------------------------Getting the already filled form from database.--------------------------//
router.get('/editnewcars/:id', (req, res) => {
    Cars.getOneNewCarById(req.params.id, (err, result) => {
        if(err){
            throw res.json(err);
        } else {
            res.render('pages/edit_new_car', {
                siteTitle : siteTitle,
                pageTitle : 'Editing',
                item : result,
            });
        }
    });
});

//---------------------------Posting the updated form using PUT request.-----------------------------//
router.put('/editnewcars/:id', (req, res, next) => {
    Cars.updateNewCar(req.params.id, req.body, (err, result) => {
        if(err) {
            res.json(err);
        } else if (result.affectedRows) {
            res.redirect(baseURL);
        }
    });
});

//----------------------------------Deleting the data.-----------------------------------------------//
router.delete('/deletenewcars/:id', (req, res, next) => {
    Cars.deleteNewCar(req.params.id, (err, result) => {
        if(err) {
            res.json(err);
        } else if (result.affectedRows) {
            res.redirect(baseURL);
        }
    });
});

//---------------------------------------------------------------------------------------------------//
//--------------------------------------- \/ USED CARS \/ -------------------------------------------//
//---------------------------------------------------------------------------------------------------//

//----------------------------------Getting the data from database.----------------------------------//
//---------------------------Getting all the used cars from the database.----------------------------//
router.get('/usedcars', (req, res) => {
    Cars.getAllUsedCars((err, result) => {
        if(err){
            res.json(err);
        } else {
            res.render('pages/used_cars', {
                siteTitle : siteTitle,
                pageTitle : "Used Cars",
                items : result
            });
        }
    });
});

//---------------------------------Getting the particular car by id.---------------------------------//
router.get('/usedcars/:id', (req, res) => { 
    Cars.getOneUsedCarById(req.params.id, (err,result) => {
        if(err){
            res.json(err);
        } else {
            res.render('pages/used_car_details', {
                siteTitle : siteTitle,
                pageTitle : 'Used Car',
                items : result
            });
        }
    });
});

//----------------------------------Posting the data to database.------------------------------------//
//-------------------Getting the form from an external ejs file 'add_used_car.ejs'.------------------//
router.get('/addusedcars', (req, res) => {
    res.render('pages/add_used_car', {
        siteTitle : siteTitle,
        pageTitle : "Add Used Car",
        items : ''
    });
});

//---------------------Inserting the values given by the user into the database.---------------------//
router.post('/addusedcars', (req,res,next) => {
    Cars.addUsedCar(req.body, (err,count) => {
        if(err) {
            res.json(err);
        } else {
            res.redirect(baseURL);
        }
    });
});

//---------------------------------------Updating the data.------------------------------------------//
//---------------------------Getting the already filled form from database.--------------------------//
router.get('/editusedcars/:id', (req, res) => { 
    Cars.getOneUsedCarById(req.params.id, (err,result) => {
        if(err){
            res.json(err);
        } else {
            res.render('pages/edit_used_car', {
                siteTitle : siteTitle,
                pageTitle : 'Editing',
                item : result
            });
        }
    });
});

//---------------------------Posting the updated form using PUT request.-----------------------------//
router.put('/editusedcars/:id', (req, res, next) => {
    Cars.updateUsedCar(req.params.id, req.body, (err, result) => {
        if(err) {
            res.json(err);
        } else if (result.affectedRows) {
            res.redirect(baseURL);
        }
    });
});

//----------------------------------Deleting the data.-----------------------------------------------//
router.delete('/deleteusedcars/:id', (req, res, next) => {
    Cars.deleteUsedCar(req.params.id, (err, result) => {
        if(err) {
            res.json(err);
        } else if (result.affectedRows) {
            res.redirect(baseURL);
        }
    });
});

module.exports = router;