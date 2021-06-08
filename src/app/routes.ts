import { Router } from 'express';
import { CarroController } from './controllers/carro-controller';

class Routes {
  public router: Router = Router();

  constructor() {
    this.carro();
  }

  private carro(): void {
    const carroController: CarroController = new CarroController();
    this.router.get('/carro', carroController.consultar);
    this.router.get('/carro/:id', carroController.consultarPorId);
    this.router.post('/carro', carroController.adicionar);
    this.router.put('/carro/:id', carroController.atualizar);
    this.router.delete('/carro/:id', carroController.deletar);
  }
}

export default new Routes().router;