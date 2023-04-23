import { CreateCourseRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CreateCourseRequest';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/value-object/CourseDuration';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/value-object/CourseName';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseIdMother } from '../../Shared/domain/Courses/CourseIdMother';
import { CourseDurationMother } from './value-object/CourseDurationMother';
import { CourseNameMother } from './value-object/CourseNameMother';

export class CourseMother {
	static create(id: CourseId, name: CourseName, duration: CourseDuration): Course {
		return new Course({ id, name, duration });
	}

	static fromRequest(request: CreateCourseRequest): Course {
		return this.create(
			CourseIdMother.create(request.id),
			CourseNameMother.create(request.name),
			CourseDurationMother.create(request.duration)
		);
	}

	static random(): Course {
		return this.create(
			CourseIdMother.random(),
			CourseNameMother.random(),
			CourseDurationMother.random()
		);
	}
}
