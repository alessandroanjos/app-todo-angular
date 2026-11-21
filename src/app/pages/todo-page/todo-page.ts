import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  imports: [Card],
  selector: 'app-todo-page',
  styleUrl: './todo-page.css',
  templateUrl: './todo-page.html',
})
export class TodoPage {}
