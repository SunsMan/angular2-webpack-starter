import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItem } from './../services/todo.service';

@Component({
  selector: 'todo-list',
  styleUrls: [ './todo-list.style.css' ],
  templateUrl: './todo-list.template.html'
 //  template: `
	// <div></div>
 //  `
})
export class TodoList implements OnInit {
	time: Date;
	timeStr: string;
	items: TodoItem[] = [];

  constructor(private todoService:TodoService) {
  }

  ngOnInit() {
  	this.items = this.todoService.getTodoItems();
  	console.log('TodoList');
  	// this.time = new Date();
  	setInterval(() => this.timeStr = (new Date()).toLocaleTimeString())
  }
}
