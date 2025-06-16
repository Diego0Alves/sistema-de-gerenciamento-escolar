import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {

    return sequelize.define(
        "turmasModel",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
        },
        {
            tableName: "turmas",
            timestamps: true,
            updatedAt: false,
            createdAt: "created_at"
        },

    );

})();