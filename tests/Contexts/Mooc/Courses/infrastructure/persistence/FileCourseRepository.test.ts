import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { Uuid } from '../../../../../../src/Contexts/shared/domain/value-object/Uuid';

describe('Save Course', () => {
	it('should have a course', async () => {
		const repository = new FileCourseRepository();
		const course = new Course({
			id: new Uuid('0766c602-d4d4-48b6-9d50-d3253123275e'),
			name: 'name',
			duration: 'duration'
		});

		await repository.save(course);
	});
});
