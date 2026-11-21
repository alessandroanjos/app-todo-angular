import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';
import { Card } from './components/card/card';
import { TodoPage } from './pages/todo-page/todo-page';
import { Home } from './pages/home/home';
import { Nav } from './components/nav/nav';

@Component({
  imports: [Card, TodoPage, Home, RouterOutlet, Nav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app-todo');
}
