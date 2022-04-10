import { Router, Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { CarroController } from '../controllers/carro-controller';

@injectable()
export class Routes {
  public router: Router = Router();
  private carroController: CarroController;

  constructor(carroController: CarroController) {
    this.carroController = carroController;
    this.setCarroRoutes();
  }

  private setCarroRoutes(): void {
    this.router.get('/carros', async (req: Request, res: Response) => await this.carroController.consultar(req, res));
    this.router.get('/carros/:id', async (req: Request, res: Response) => await this.carroController.consultarPorId(req, res));
    this.router.post('/carros', async (req: Request, res: Response) => await this.carroController.adicionar(req, res));
    this.router.put('/carros/:id', async (req: Request, res: Response) => await this.carroController.atualizar(req, res));
    this.router.delete('/carros/:id', async (req: Request, res: Response) => await this.carroController.deletar(req, res));
  }
}