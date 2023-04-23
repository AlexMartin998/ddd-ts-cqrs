import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { CourseDuration } from './value-object/CourseDuration';
import { CourseName } from './value-object/CourseName';

export class Course {
	readonly id: CourseId;
	readonly name: CourseName;
	readonly duration: CourseDuration;

	constructor({
		id,
		name,
		duration
	}: {
		id: CourseId;
		name: CourseName;
		duration: CourseDuration;
	}) {
		this.id = id;
		this.name = name;
		this.duration = duration;
	}
	// constructor(dto: { id: Uuid; name: string; duration: string }) {
	// 	Object.assign(this, dto);
	// }
}
