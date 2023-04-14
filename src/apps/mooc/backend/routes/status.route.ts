import { Request, Response, Router } from 'express';

import { StatusGetController } from '../controllers/StatusGetController';
// import container from '../dependency-injection';

export const register = (router: Router): void => {
	const controller = new StatusGetController();

	router.get('/status', (req: Request, res: Response) => controller.run(req, res));
};
