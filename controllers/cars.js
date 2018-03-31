const db   =  require('../core/dbconnection');

//These are the controllers essential for CRUD operations.

module.exports.getEveryCarAvailable = function(callback){
    return db.query("(SELECT id, make, title, type, bodytype, year, price, transmission FROM new_cars ORDER BY make DESC LIMIT 0, 25) UNION (SELECT id, make, title, type, bodytype, year, price, transmission FROM used_cars ORDER BY id DESC LIMIT 0, 25)", callback);
};

module.exports.getAllNewCars        = function(callback){
    return db.query("SELECT * FROM new_cars", callback);
    };

module.exports.getOneNewCarById     = function(id, callback){
    return db.query("SELECT * FROM new_cars WHERE id = ?", [id], callback);
    };

module.exports.getAllUsedCars       = function(callback){
    return db.query("SELECT * FROM used_cars", callback);
    };

module.exports.getOneUsedCarById    = function(id, callback){
    return db.query("SELECT * FROM used_cars WHERE id = ?", [id], callback);
    };

module.exports.addNewCar            = function(newCar, callback){
    return db.query("INSERT INTO new_cars VALUES('',?,?,'New',?,?,?,?)",[newCar.make, newCar.title, newCar.bodytype, newCar.year, newCar.price, newCar.transmission], callback);
    };

module.exports.addUsedCar           = function(usedCar, callback){
    return db.query("INSERT INTO used_cars VALUES('',?,?,'Used',?,?,?,?,?)",[usedCar.make, usedCar.title, usedCar.bodytype, usedCar.year, usedCar.mileage, usedCar.price, usedCar.transmission], callback);
    };

module.exports.updateNewCar         = function(id, newCar, callback){
    return db.query("UPDATE new_cars SET id=?, make=?, title=?, type='New', bodytype=?, year=?, price=?, transmission=? WHERE id=? ",[newCar.id, newCar.make, newCar.title, newCar.bodytype, newCar.year, newCar.price, newCar.transmission, newCar.id], callback);
    };
    
module.exports.updateUsedCar        = function(id, usedCar, callback){
    return db.query("UPDATE used_cars SET id=?, make=?, title=?, type='Used', bodytype=?, year=?, mileage=?, price=?, transmission=? WHERE id=? ",[usedCar.id, usedCar.make, usedCar.title, usedCar.bodytype, usedCar.year, usedCar.mileage, usedCar.price, usedCar.transmission, usedCar.id], callback);
    };

module.exports.deleteNewCar         = function(id, callback){
    return db.query("DELETE FROM new_cars WHERE id=?", [id], callback);
    };

module.exports.deleteUsedCar        = function(id, callback){
    return db.query("DELETE FROM used_cars WHERE id=?", [id], callback);
    };