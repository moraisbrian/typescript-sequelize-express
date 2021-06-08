import { QueryInterface, DataTypes } from 'sequelize';

export = {
    async up(queryInterface: QueryInterface): Promise<void> {
        await queryInterface.createTable('Carro', {
            Id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            Modelo: DataTypes.STRING(100),
            MarcaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Marca',
                    key: 'Id'
                }
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        });
    },
    async down(queryInterface: QueryInterface): Promise<void> {
        await queryInterface.dropTable('Carro');
    }
}