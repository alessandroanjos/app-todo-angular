import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';

@Component({
  imports: [TodoList],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {


}
