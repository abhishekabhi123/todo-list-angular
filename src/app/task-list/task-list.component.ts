import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task('Visit Ann'),
    new Task('Call dad'),
    new Task('Go to the gym'),
    new Task('Wash the dishes'),
    new Task('Shop for the part'),
  ];

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }
  remove(deleteTask: Task) {
    let userConfirm = confirm(
      `Are you sure you want to delete "${deleteTask.title}"`
    );
    if (userConfirm) {
      this.tasks = this.tasks.filter((task) => task != deleteTask);
    }
  }
}

class Task {
  constructor(public title: string) {}
  toggleAsDone() {
    this.isDone = !this.isDone;
  }
  public isDone = false;
}
