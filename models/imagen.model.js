
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Imagen = sequelize.define("Imagen", {

        ubicacion: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        nroDeOrden: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },


    });

    return Imagen;
}

