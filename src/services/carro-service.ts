import { Carro } from '../domain/entities/carro';
import { Marca } from '../domain/entities/marca';
import { Sequelize } from 'sequelize-typescript';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CarroService {
  private sequelize: Sequelize;

  constructor (@inject("Sequelize") sequelize: Sequelize) {
    this.sequelize = sequelize;
  }

  public async adicionar(modelo: string, marcaId: number): Promise<Carro> {
    return await this.sequelize.models.Carro.create({
      Modelo: modelo,
      MarcaId: marcaId
    }) as Carro;
  }

  public async consultar(): Promise<Carro[]> {
    return await this.sequelize.models.Carro.findAll({ include: Marca }) as Carro[];
  }

  public async atualizar(id: number, modelo: string, marcaId: number): Promise<any> {
    return await this.sequelize.models.Carro.update({
      Modelo: modelo,
      MarcaId: marcaId
    }, {
      where: { Id: id }
    });
  }

  public async deletar(id: number): Promise<number> {
    return await this.sequelize.models.Carro.destroy({ where: { Id: id } });
  }

  public async consultarPorId(id: number): Promise<Carro | null> {
    return await this.sequelize.models.Carro.findByPk(id, { include: Marca }) as Carro;
  }
}