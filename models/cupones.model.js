
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Cupones = sequelize.define("Cupones", {

        codigo: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        descuento: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },


    });

    return Cupones;
}
