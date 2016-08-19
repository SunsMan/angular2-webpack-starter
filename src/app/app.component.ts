/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { TodoService } from './services/todo.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <header>
      <h1> Todo App Header </h1>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
    
    <footer>
      Footer, EPAM System - mentoring Angular2, 2016
    </footer>
  `,
  providers: [
    TodoService
  ]
})
export class App {

}
