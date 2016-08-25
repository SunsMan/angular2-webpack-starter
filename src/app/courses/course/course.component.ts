import { Component, EventEmitter } from '@angular/core';
import { CourseItem } from './../../services';

@Component({
  selector: 'course',
  styleUrls: [
    './course.style.css'
  ],
  templateUrl: './course.template.html'
  ,
  inputs:[],
  outputs: []
})

export class Course {
  info:CourseItem;
}
