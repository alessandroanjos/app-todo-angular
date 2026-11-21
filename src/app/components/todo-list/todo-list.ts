import { Component, ElementRef, ViewChild } from '@angular/core';

interface Task {
  id?: number;
  name: string;
}


@Component({
  imports: [],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {

  tasks: Task[] = [];

  @ViewChild("todoName") todoInputRef: ElementRef<HTMLInputElement> = null!;


  addTask(name: string){
    if(name){
      this.tasks.push( { name: name })
      console.log("name gravado: ", this.tasks);
    }
  }

  name: string = 'Lista de tarefas'

  showHello(){
    console.log("hello my friend")
  }

  removeTask(){
    this.tasks.pop();
  }
}
