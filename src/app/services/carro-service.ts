import { Carro } from '../models/carro';
import { Marca } from '../models/marca';
import { sequelize } from '../models';

export class CarroService {
  public async adicionar(modelo: string, marcaId: number): Promise<Carro> {
    return await sequelize.models.Carro.create({
      Modelo: modelo,
      MarcaId: marcaId
    }) as Carro;
  }

  public async consultar(): Promise<Carro[]> {
    return await sequelize.models.Carro.findAll({ include: Marca }) as Carro[];
  }

  public async atualizar(id: number, modelo: string, marcaId: number): Promise<any> {
    return await sequelize.models.Carro.update({
      Modelo: modelo,
      MarcaId: marcaId
    }, {
      where: { Id: id }
    });
  }

  public async deletar(id: number): Promise<number> {
    return await sequelize.models.Carro.destroy({ where: { Id: id } });
  }

  public async consultarPorId(id: number): Promise<Carro | null> {
    return await sequelize.models.Carro.findByPk(id, { include: Marca }) as Carro;
  }
}