import BSON from 'bson';
import fs from 'fs';

import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';

export class FileCourseRepository implements CourseRepository {
	private readonly FILE_PATH = `${__dirname}/courses`;

	async save(course: Course): Promise<void> {
		await fs.promises.writeFile(this.filePath(course.id), BSON.serialize(course));
	}

	private filePath(id: string): string {
		return `${this.FILE_PATH}.${id}.repo`;
	}
}
