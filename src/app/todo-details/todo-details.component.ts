import { Component } from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'todo-details',  // <todo-details></todo-details>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './todo-details.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './todo-details.template.html'
})
export class TodoDetails {
  ngOnInit() {
    console.log('hello `todo-details` component; loaded');
  }
}
