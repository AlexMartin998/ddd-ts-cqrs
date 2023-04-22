import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';

export class CourseRepositoryMock implements CourseRepository {
	private readonly saveMock: jest.Mock;

	constructor() {
		this.saveMock = jest.fn();
	}

	async save(course: Course): Promise<void> {
		await this.saveMock(course);
	}

	assertSaveHaveBeenCalledWith(expected: Course): void {
		// el void es semantico, provoca 1 side effect
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}
}
