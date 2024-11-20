
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Producto = sequelize.define("Producto", {

        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcionBreve: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        precioUnitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        descripcionDetallada: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        costoProducto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0,
        },
        disponible:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        }
       


    });

    return Producto;
}

