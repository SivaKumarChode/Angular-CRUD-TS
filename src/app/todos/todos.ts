import { Component, inject, OnInit, signal } from '@angular/core';
import { Apis } from '../services/apis';
import { TodoResponse } from '../types/createTodo.interface';
import { JsonPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-todos',
  imports: [JsonPipe, RouterLink],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit{
  ngOnInit(): void {
    this.getTodos()
  }
  todos= signal<TodoResponse["todos"]>([])
  todoSerApi=inject(Apis)
  getTodos(){
    this.todoSerApi.getAllTodos().subscribe((res:TodoResponse)=>{
      this.todos.set(res.todos)
      console.log("Todos V-->",this.todos());
    })
  }

  deleteTodo(id:string){
   this.todoSerApi.deleteTodo(id).subscribe((res)=>{
    console.log(res);
    const deleteTodo=this.todos().filter((todo)=>{
      return todo._id !== id
    })
    this.todos.update((currentTodos) => deleteTodo)
   }) 
  }
}
