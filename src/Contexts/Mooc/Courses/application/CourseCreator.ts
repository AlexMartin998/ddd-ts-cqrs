import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CreateCourseRequest } from './CreateCourseRequest';

export class CourseCreator {
	constructor(private readonly repository: CourseRepository) {}

	async run({ id, name, duration }: CreateCourseRequest): Promise<void> {
		const course = new Course({ id: new Uuid(id), name, duration });

		return this.repository.save(course);
	}
}
