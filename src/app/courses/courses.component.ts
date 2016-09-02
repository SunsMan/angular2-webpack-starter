import { Component, OnInit, OnDestroy } from '@angular/core';
import {CourseItem} from "./../services/courseItem";
// import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
// import { CredentialHandler } from '../services';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'login'
  selector: 'login',  // <login></login>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './courses.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './courses.template.html'
})
export class Courses {
  private courses:CourseItem[];
  // loginForm:FormGroup;
  formErrors:any[];
  // private: user

  constructor() { }

  ngOnInit() {
    console.log('hello `Login` component');
    // this.loginForm = this.fb.group({});
    // this.initForm();
  }

  ngOnDestroy() { }

  onSubmit(){
    console.log('Form submited');
  }
}
