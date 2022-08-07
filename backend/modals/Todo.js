const Sequelize = require('Sequelize');
const db = require('../routes/db')

const Todo = db.define('notes',{
  userid:{
    type:Sequelize.STRING
  },
  
  note:{
    type:Sequelize.STRING
     },
   email:{
    type:Sequelize.STRING 
    }

});
module.exports=Todo