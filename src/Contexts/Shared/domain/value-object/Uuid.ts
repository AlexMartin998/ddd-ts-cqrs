import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';

import { InvalidArgumentError } from './InvalidArgumentError';
import { ValueObject } from './ValueObject';

export class Uuid extends ValueObject<string> {
	// el con lo hace instanciable, asi q cumple con NewableClass a pesar de 1 NO extiende de ella
	constructor(value: string) {
		super(value);
		this.ensureIsValidUuid(value);
	}

	static random(): Uuid {
		return new Uuid(uuid() as string);
	}

	private ensureIsValidUuid(id: string): void {
		if (!validate(id)) {
			throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
		}
	}
}
