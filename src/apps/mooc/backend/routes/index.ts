import { NextFunction, Request, Response, Router } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import glob from 'glob';
import httpStatus from 'http-status';

export function registerRoutes(router: Router): void {
	const routes = glob.sync(`${__dirname}/**/*.route.*`);
	routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
	const { register } = require(routePath) as { register: (router: Router) => void };
	register(router);
}

// middelware
export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
	const validationErrors = validationResult(req);
	if (validationErrors.isEmpty()) return next();

	const errors = validationErrors.array().map((err: ValidationError) => ({ [err.param]: err.msg }));

	return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
		errors
	});
}
