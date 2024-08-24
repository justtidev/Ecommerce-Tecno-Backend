
module.exports = (sequelize, Sequelize) => {

    //extraer tipo de datos de Sequelize
    const { DataTypes } = Sequelize;

    const Usuario = sequelize.define("Usuario", {

        nombre: {
            //Definicion de los campo
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        apellido: {
            //Definicion de los campo
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        contraseña: {
            type: DataTypes.STRING(45),
            allowNull: false,


        },


    });

    return Usuario;
}

