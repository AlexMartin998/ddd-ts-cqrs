import { RandomLoremParams } from '../interfaces';
import { MotherCreator } from './MotherCreator';

export class WordMother {
	static random({ minLength = 1, maxLength }: RandomLoremParams): string {
		return MotherCreator.randomLorem({ minLength, maxLength }) || 'word';
	}
}
