import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application, json, urlencoded } from 'express';
import routes from './routes';

class App {
  public express: Application = express();
  constructor() {
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(json());
    this.express.use(urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;