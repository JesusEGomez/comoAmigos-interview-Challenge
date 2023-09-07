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
    if (this.text.trim()) {
      this.taskList.push(new Task(this.text));
    }
    this.text = '';
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  completeTask(task: Task) {
    task.state = !task.state;
  }
}
