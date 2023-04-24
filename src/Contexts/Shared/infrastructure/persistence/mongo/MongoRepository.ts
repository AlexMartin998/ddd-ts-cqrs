import { Collection, MongoClient, ObjectId } from 'mongodb';

import { AggregateRoot } from '../../../domain/AggregateRoot';

export abstract class MongoRepository<T extends AggregateRoot> {
	// inyectamos el client de mongo
	constructor(private readonly _client: Promise<MongoClient>) {}

	protected abstract collectionName(): string;

	protected async client(): Promise<MongoClient> {
		return this._client;
	}

	protected async collection(): Promise<Collection> {
		return (await this._client).db().collection(this.collectionName());
	}

	protected async persist(id: string, aggregateRoot: T): Promise<void> {
		const collection = await this.collection();

		// este mapping evita q se nos contamine el domain con detalles de infra (mongo), ademas q ganamos todo lo q ganamos con el AggregateRoot
		const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

		await collection.updateOne(
			{ _id: id as unknown as ObjectId },
			{ $set: document },
			{ upsert: true }
		);
	}
}
