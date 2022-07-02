'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    brandName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = Clothes;