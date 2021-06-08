import { QueryInterface, DataTypes } from 'sequelize';

export = {
    async up(queryInterface: QueryInterface): Promise<void> {
        await queryInterface.createTable('Marca', {
            Id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            Descricao: DataTypes.STRING(100),
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        });
    },
    async down(queryInterface: QueryInterface): Promise<void> {
        await queryInterface.dropTable('Marca');
    }
}