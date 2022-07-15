"user strict"
var { initModels } = require("../models/init-models");
const db = require('../models/config');


exports.chk_user = (req, res)=> {
    const {username} = req.body.username;
    console.log(username)
    var models = initModels(db.sequelize);
    models.users.findOne({
        // where: { username: "ashish" }
        // where: { contact_number: "9999999999" }
        // where: { email: "ashish.sonawane@velociters.com" }
    })
    .then(data => {
        res.status(200).send({status: 200, message:"existclient", result:data})
    });  
}

exports.home = (req, res) => {
    
    var models = initModels(db.sequelize);
    models.users.findAll({ where: { contact_person: "Anil Gupta" } }).then(data => {
        res.status(200).json({ status: true, data })
    });
}   