import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseDuration } from '../domain/value-object/CourseDuration';
import { CourseName } from '../domain/value-object/CourseName';
import { CreateCourseRequest } from './CreateCourseRequest';

export class CourseCreator {
	constructor(private readonly repository: CourseRepository) {}

	async run({ id, name, duration }: CreateCourseRequest): Promise<void> {
		const course = new Course({
			id: new CourseId(id),
			name: new CourseName(name),
			duration: new CourseDuration(duration)
		});

		return this.repository.save(course);
	}
}
