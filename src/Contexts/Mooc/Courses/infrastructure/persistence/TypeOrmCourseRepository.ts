import { EntitySchema } from 'typeorm';

import { Nullable } from '../../../../Shared/domain/Nullable';
import { TypeOrmRepository } from '../../../../Shared/infrastructure/persistence/typeorm/TypeOrmRepository';
import { CourseId } from '../../../Shared/domain/Courses/CourseId';
import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';
import { CourseEntity } from './typeorm/CourseEntity';

export class TypeOrmCourseRepository extends TypeOrmRepository<Course> implements CourseRepository {
	public async save(course: Course): Promise<void> {
		return this.persist(course);
	}

	public async search(id: CourseId): Promise<Nullable<Course>> {
		// ref al patron repository de typeorm q nos proporciona para acceder a las tablas
		const repository = await this.repository();

		// sabe a q Schema atacar gracias al entitySchema
		const course = await repository.findOne({ id });

		return course;
	}

	protected entitySchema(): EntitySchema<Course> {
		return CourseEntity;
	}
}
