import { Sequelize } from 'sequelize-typescript';
import { Options } from 'sequelize';
import config from '../../database/config';

import { Carro } from './carro';
import { Marca } from './marca';

const sequelize = new Sequelize(<Options>config);
sequelize.addModels([
  Carro,
  Marca
]);

export { sequelize };