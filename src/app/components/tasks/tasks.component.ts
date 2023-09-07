import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  taskList: Task[] = [];
  text: string = '';

  addTask(): void {
    this.taskList.push(new Task(this.text));
    this.text = '';
  }
}
