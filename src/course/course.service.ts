/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    constructor(
        private newCourse,
    ) {
        if (newCourse)
            this.courses.push(newCourse);
    }

    public courses;

    getAllCourses() {
        return this.courses;
    }
}
