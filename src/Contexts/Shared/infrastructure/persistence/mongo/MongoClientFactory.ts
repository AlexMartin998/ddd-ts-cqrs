import { MongoClient } from 'mongodb';

import MongoConfig from './MongoConfig';

export class MongoClientFactory {
	private static clients: { [key: string]: MongoClient } = {};

	// el MongoConfig nos lo pasan x Dependency Injection
	static async createClient(contextName: string, config: MongoConfig): Promise<MongoClient> {
		// busca 1 pool de conexiones con este contextName
		let client = MongoClientFactory.getClient(contextName);

		if (!client) {
			// si no existe el pool de conexiones registrado con ese contextName, crealo y conectalo
			client = await MongoClientFactory.createAndConnectClient(config);

			MongoClientFactory.registerClient(client, contextName);
		}

		// retornamos el client q lo espera la Implementacion del Repository con Mongo
		return client;
	}

	private static getClient(contextName: string): MongoClient | null {
		return MongoClientFactory.clients[contextName];
	}

	// creacion del cliente de mongo con el driver de mongo q nos proporciona la dep de mongodb
	// pero para resolver esto, tenemos otra Factoria q nos da las Configs de Mongo 'MongoConfigFactory'
	private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
		const client = new MongoClient(config.url);

		await client.connect();

		return client;
	}

	private static registerClient(client: MongoClient, contextName: string): void {
		MongoClientFactory.clients[contextName] = client;
	}
}
