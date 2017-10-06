'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Student.prototype.getFullname = function () {
    return this.first_name + ' ' + this.last_name
  }

  //validate here
  Student.hook('beforeValidate', function(user, options) {
    if(validator.isEmail(user.email)){
      return sequelize.Promise.resolve(user);
    }else{
      return sequelize.Promise.reject('validation error: email format is incorrect');
      // confirm("Press a button!")
    }
  });

  return Student;
};
