import { Request, Response } from 'express';
import { CarroService } from '../services/carro-service';

export class CarroController {
  public async adicionar(req: Request, res: Response): Promise<void> {
    try {
      const { modelo, marcaId } = req.body;

      if (modelo === null || modelo === undefined || marcaId === null || marcaId === undefined)
        throw 'Dados inválidos'

      const carroService: CarroService = new CarroService();
      const carro = await carroService.adicionar(modelo, marcaId);

      res.status(201).json(carro);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async consultar(req: Request, res: Response): Promise<void> {
    try {
      const carroService: CarroService = new CarroService();
      const carros = await carroService.consultar();
      const httpStatus = (carros === null || carros === []) ? 204 : 200;
      res.status(httpStatus).json(carros);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async atualizar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { modelo, marcaId } = req.body;

      if (id === undefined || id === null)
        throw 'Id não definido';
      if (modelo === null || modelo === undefined || marcaId === null || marcaId === undefined)
        throw 'Dados inválidos'

      const carroService: CarroService = new CarroService();
      const result = await carroService.atualizar(parseInt(id), modelo, marcaId);

      const httpStatus = result === null ? 204 : 200;

      res.status(httpStatus).json(result);
    } catch (error) {
      res.status(400).json(error)
    }
  }

  public async deletar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (id === undefined || id === null)
        throw 'Id não definido';

      const carroService: CarroService = new CarroService();
      const result = await carroService.deletar(parseInt(id));

      const httpStatus = result === 0 ? 204 : 200;

      res.status(httpStatus).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async consultarPorId(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (id === undefined || id === null)
        throw 'Id não definido';

      const carroService: CarroService = new CarroService();
      const carro = await carroService.consultarPorId(parseInt(id));

      const httpStatus = carro === null ? 204 : 200;

      res.status(httpStatus).json(carro);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}