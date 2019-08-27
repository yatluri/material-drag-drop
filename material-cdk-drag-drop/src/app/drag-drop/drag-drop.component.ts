import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Todo } from './models/todo';
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  todoList$ = this.tService.todo$;
  constructor(private tService: TaskService) {}
  ngOnInit() {
    this.tService.initialize$().subscribe((response: Array<Todo>) => {
      console.log(response);
    });
  }
}
