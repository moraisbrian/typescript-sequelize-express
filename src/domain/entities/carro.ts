import { Table, Column, Model, BelongsTo, DataType, ForeignKey } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Marca } from './marca';

interface CarroAttributes {
  Id: number;
  Modelo: string;
  MarcaId: number;
}

interface CarroCreationAttributes extends Optional<CarroAttributes, 'Id'> { }

@Table({
  tableName: 'Carro'
})
export class Carro extends Model<Carro, CarroCreationAttributes> implements CarroAttributes {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  Id!: number;

  @Column
  Modelo!: string;

  @Column
  @ForeignKey(() => Marca)
  MarcaId!: number;

  @BelongsTo(() => Marca)
  Marca!: Marca

  @Column
  readonly createdAt!: Date;

  @Column
  readonly updatedAt!: Date;
}