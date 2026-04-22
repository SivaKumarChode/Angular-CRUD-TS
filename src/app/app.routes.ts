import { Routes } from '@angular/router';
import { Todos } from './todos/todos';
import { CrateTodo } from './crate-todo/crate-todo';
import { UpdateTodo } from './update-todo/update-todo';

export const routes: Routes = [
    {
        path:'',
        component:Todos
    },
    {
        path:'add',
        component:CrateTodo
    },
    {
        path:'update/:id',
        component:UpdateTodo
    },
];
