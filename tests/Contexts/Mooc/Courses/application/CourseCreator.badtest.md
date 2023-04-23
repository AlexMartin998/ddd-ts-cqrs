import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/value-object/CourseDuration';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/value-object/CourseName';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Courses/domain/value-object/CourseNameLengthExceeded';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
	let repository: CourseRepositoryMock;
	let creator: CourseCreator;

	beforeEach(() => {
		repository = new CourseRepositoryMock();
		creator = new CourseCreator(repository);
	});

	it('should create a valid course', async () => {
		const id = '0766c602-d4d4-48b6-9d50-d3253123275e';
		const name = 'name';
		const duration = '5 hours';
		const expectedCourse = new Course({
			id: new CourseId(id),
			name: new CourseName(name),
			duration: new CourseDuration(duration)
		});

		// Aqui lo Instancia el Caso de uso, q luego es comparado con el mock
		await creator.run({ id, name, duration });

		// los errores son mas explicitos: Como es el Caso de Uso quien instancia el Course con lo q le pasamos, y al armar el test asi, se compara lo q instancia el caso de uso y el expected error, de esta manera se dan errores mas descriptivos y no un boolean
		repository.assertSaveHaveBeenCalledWith(expectedCourse);
	});

	it('should throw error if course name length is exceeded', () => {
		const id = '0766c602-d4d4-48b6-9d50-d3253123275e';
		const name = 'some-name'.repeat(30);
		const duration = 'some-duration';

		expect(() => {
			const course = new Course({
				id: new CourseId(id),
				name: new CourseName(name),
				duration: new CourseDuration(duration)
			});

			creator.run({ id, name, duration });

			repository.assertSaveHaveBeenCalledWith(course);
		}).toThrow(CourseNameLengthExceeded);
	});
});
