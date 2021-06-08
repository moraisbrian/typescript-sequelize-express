import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Carro } from './carro';

interface MarcaAttributes {
  Id: number;
  Descricao: string;
}

interface MarcaCreationAttributes extends Optional<MarcaAttributes, 'Id'> { }

@Table({
  tableName: 'Marca'
})
export class Marca extends Model<Marca, MarcaCreationAttributes> implements MarcaAttributes {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  Id!: number;

  @Column
  Descricao!: string;

  @HasMany(() => Carro)
  Carros!: Carro[];

  @Column
  readonly createdAt!: Date;

  @Column
  readonly updatedAt!: Date;
}