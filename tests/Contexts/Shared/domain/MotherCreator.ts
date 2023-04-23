import * as faker from 'faker';

import { RandomLoremParams } from '../interfaces';

export class MotherCreator {
	static random(): Faker.FakerStatic {
		return faker;
	}

	static randomLorem({ minLength = 1, maxLength }: RandomLoremParams): string {
		return faker.lorem.word(Math.floor(Math.random() * (maxLength - minLength)) + minLength);
	}

	static positiveNumber(max?: number): number {
		return faker.datatype.number({ min: 1, max });
	}

	static uuid(): string {
		return faker.datatype.uuid();
	}
}
