import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { CourseDuration } from './value-object/CourseDuration';
import { CourseName } from './value-object/CourseName';

export class Course extends AggregateRoot {
	readonly id: CourseId;
	readonly name: CourseName;
	readonly duration: CourseDuration;

	constructor(id: CourseId, name: CourseName, duration: CourseDuration) {
		super();

		this.id = id;
		this.name = name;
		this.duration = duration;
	}
	// constructor(dto: { id: Uuid; name: string; duration: string }) {
	// 	Object.assign(this, dto);
	// }

	static fromPrimitives(plainData: { id: string; name: string; duration: string }): Course {
		return new Course(
			new CourseId(plainData.id),
			new CourseName(plainData.name),
			new CourseDuration(plainData.duration)
		);
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			name: this.name.value,
			duration: this.duration.value
		};
	}
}
