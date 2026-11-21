import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Card } from './components/card/card';

export const routes: Routes = [
    {
        path: 'home', component: Home
    },
    {
        path: 'todo', component: Card
    }
];
