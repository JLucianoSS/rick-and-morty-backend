const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey: true,
      },
      email:{
         type: DataTypes.STRING,
         sllowNull:false,
         validate: {
            isEmail:true
         }
      },
      password: {
         type: DataTypes.STRING,
         sllowNull:false,
      }
   }, { timestamps: false });
};
