/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-await-in-loop */
import { DataSource, EntityMetadata } from 'typeorm';

import { EnvironmentArranger } from '../arranger/EnvironmentArranger';

export class TypeOrmEnvironmentArranger extends EnvironmentArranger {
	constructor(private readonly _client: Promise<DataSource>) {
		super();
	}

	public async arrange(): Promise<void> {
		await this.cleanDatabase();
	}

	public async close(): Promise<void> {
		return (await this.client()).destroy();
	}

	protected async cleanDatabase(): Promise<void> {
		const entities = await this.entities();

		try {
			for (const entity of entities) {
				const repository = (await this._client).getRepository(entity.name);
				await repository.query(`TRUNCATE TABLE ${entity.tableName};`);
			}
		} catch (error) {
			throw new Error(`Unable to clean test database: ${error}`);
		}
	}

	protected async client(): Promise<DataSource> {
		return this._client;
	}

	private async entities(): Promise<EntityMetadata[]> {
		return (await this._client).entityMetadatas;
	}
}
