import { Component, OnInit, OnDestroy } from '@angular/core';
// import {Course} from "../courses/course/course.component";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {CourseItem} from "../services/courseItem";

@Component({
  selector: 'add-edit-course',
  providers: [],
  styleUrls: ['./add.edit.course.style.css'],
  directives: [],
  templateUrl: './add.edit.course.component.html',
  pipes: []
})

export class AddEditCourse {
  courseInfoForm: FormGroup;
  constructor(private course:CourseItem) {}
}

