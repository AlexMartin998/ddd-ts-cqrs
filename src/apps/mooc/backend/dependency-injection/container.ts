import * as Axilix from 'awilix';

import { StatusGetController } from '../controllers/StatusGetController';

const container = Axilix.createContainer();

container.register({
	StatusGetController: Axilix.asClass(StatusGetController.bind(StatusGetController)).singleton()
	// StatusGetController: Axilix.asClass(StatusGetController).singleton()
});

export { container };
