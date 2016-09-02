import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
// import {Course} from "../courses/course/course.component";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {CourseItem} from "../services/courseItem";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'add-edit-course',
  providers: [],
  styleUrls: [
    './add.edit.course.style.css',
    // './../../../node_modules/uui_2.0/uui/bootstrap/css/bootstrap.min.css'
  ],
  directives: [],
  templateUrl: './add.edit.course.template.html',
  pipes: [],
  inputs: ['course'],
  outputs: ['confirmedCourse']
})

export class AddEditCourse {
  private course:CourseItem;
  private confirmedCourse:EventEmitter<string>;
  courseInfoForm: FormGroup;
  routeParamsSubscription: Subscription;
  header: string;
  // course: CourseItem;
  constructor(
              private fb:FormBuilder,
              private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.courseInfoForm = this.fb.group({});

    this.routeParamsSubscription = this.activatedRoute.params
      .subscribe(params => {
        let courseId:number = +(params['id'] ? params['id'] : -1);
        if (courseId < 0) {
          this.header = 'Add new';
        } else {
          this.header = 'Edit'; // TODO: replace for pipe
        }
        this.initializeForm();
      });
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }

  initializeForm() {
    var vm = this;

    this.courseInfoForm = this.fb.group({
      'name': [
        this.course.name
      ],
      'duration': [
        this.course.duration
      ],
      'description': [
        this.course.description,
        [
          // notEqualValidator // TODO Validator
        ]
      ],
      'complexity': [
        this.course.complexity
      ]
    });
  }
}

