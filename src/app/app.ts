import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';
import { Card } from './components/card/card';

@Component({
  imports: [Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app-todo');
}
