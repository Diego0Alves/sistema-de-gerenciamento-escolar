import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import "../../bootstrap/app.js";

export default (function () {
    return sequelize.define(
        "responsaveisModel",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            data_nascimento: {
                type: DataTypes.DATE,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            tableName: "responsaveis",
            timestamps: true,
            updatedAt: "updated_at",
            createdAt: "created_at"
        }
    );
})();