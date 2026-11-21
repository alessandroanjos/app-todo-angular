import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { v4 as uuidv4 } from 'uuid';


interface Task {
  id: string;
  name: string;
}


@Component({
  imports: [],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {

  ngOnInit(): void {
    this.loadTasks();
  }

  private http = inject(HttpClient);

  tasks: Task[] = [];

  @ViewChild("todoName") todoInputRef: ElementRef<HTMLInputElement> = null!;

  addTask( name: string){
    if(name){

      // forma anterior sem backend
      //this.tasks.push( { id: uuidv4(), name: name })


      //forma com Promises
      this.http.post('http://localhost:3000/tasks', { id: uuidv4(), name: name })
      .toPromise()
      .then((response) => {
        console.log("Adicionado tarefa", response)
        this.loadTasks();
      })
      .catch((error) => {
        console.log("Error ao adicionar tarefa", error)
      })

      console.log("name gravado: ", this.tasks);
      this.todoInputRef.nativeElement.value = '';
    }
  }

  name: string = 'Lista de tarefas'

  showHello(){
    console.log("hello my friend")
  }

  removeTask(id: string){

    // forma sem o promises
    //this.tasks.pop();

    //form com Promises
    this.http.delete(`http://localhost:3000/tasks/${id}`)
      .toPromise()
      .then((response) => {
        console.log("Removendo tarefa", response)
        this.loadTasks();
      })
      .catch((error) => {
        console.log("Error ao remover tarefa", error)
      })
  }

  loadTasks(){
    this.http.get<Task[]>('http://localhost:3000/tasks')
    .toPromise()
    .then( (response) => {
      this.tasks = response!
      console.log('Taskss: ', this.tasks);
    })
    .catch ((error) => {
      console.log(error);
    })
  }
  
}
