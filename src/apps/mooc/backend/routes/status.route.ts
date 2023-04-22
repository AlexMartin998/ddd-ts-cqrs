import { Request, Response, Router } from 'express';

import { StatusGetController } from '../controllers/StatusGetController';
import container from '../dependency-injection';
// import { container } from '../dependency-injection/container';

export const register = (router: Router): void => {
	const controller: StatusGetController = container.get(
		'Apps.mooc.controllers.StatusGetController'
	);

	router.get('/status', (req: Request, res: Response) => controller.run(req, res));
};

// export const register = (router: Router): void => {
// 	const controller = container.resolve<StatusGetController>('StatusGetController');

// 	router.get('/status', (req: Request, res: Response) => controller.run(req, res));
// };
