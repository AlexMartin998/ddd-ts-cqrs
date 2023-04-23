import { CourseName } from '../../../../../../src/Contexts/Mooc/Courses/domain/value-object/CourseName';
import { WordMother } from '../../../../Shared/domain/WordMother';

export class CourseNameMother {
	static create(value: string): CourseName {
		return new CourseName(value);
	}

	static random(): CourseName {
		return this.create(WordMother.random({ maxLength: 20 }));
	}

	static exceededLength(): string {
		return 'some invalid name\n'.repeat(40);
	}
}
