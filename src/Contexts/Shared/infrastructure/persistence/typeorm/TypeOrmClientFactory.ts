import { DataSource, getConnection } from 'typeorm';

import { TypeOrmConfig } from './TypeOrmConfig';

export class TypeOrmClientFactory {
	static async createClient(contextName: string, config: TypeOrmConfig): Promise<DataSource> {
		try {
			const dataSource = new DataSource({
				name: contextName,
				type: 'postgres',
				host: config.host,
				port: config.port,
				username: config.username,
				password: config.password,
				database: config.database,
				entities: [`${__dirname}/../../../../**/**/infrastructure/persistence/typeorm/*{.js,.ts}`],
				synchronize: true,
				logging: true
			});

			return await dataSource.initialize();
		} catch (error) {
			console.log('error', error);

			// ya habia 1 conexion, retorna esa
			return getConnection(contextName);
		}
	}
}
