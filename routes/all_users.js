'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/all_users', (req, res) => {
    res.json({all_users}) //renders account ejs file
});

// router.post('all_users', (req, res, next) => {
//     knex('all_users')
//     .insert({
//         //left side is database columns, right side is 'names' in ejs file 
//         mover_username: req.body.mover_username,
//         moving_username: req.body.moving_username,
//         truck_picture: req.body.truck_picture,
//         mover_location: req.body.mover_location,
//         moving_location: req.body.moving_location,
//         mover_date: req.body.mover_date,
//         mover_time: req.body.mover_time,
//         moving_date: req.body.moving_date,
//         mover_price: req.body.mover_price,
//         moving_time: req.body.moving_time,
//         moving_objects: req.body.moving_objects,
//         mover_truck_description: req.body.mover_truck_description,
//     }, '*')
  
//     .then((all_users) => {
//         res.send();
//     })
  
//     .catch((err) => {
//         next(err);
//     });
//   });

module.exports = router;