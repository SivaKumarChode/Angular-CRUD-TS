import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTodo, TodoResponse } from '../types/createTodo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apis {
  constructor(private http:HttpClient){
  }
  base_Url=`http://localhost:5500`

  getAllTodos():Observable<TodoResponse>{
    return this.http.get<TodoResponse>(this.base_Url+"/todos")
  }
  createTodo(data:CreateTodo):Observable<CreateTodo>{
    return this.http.post<CreateTodo>(this.base_Url+"/todo",data)
  }
  deleteTodo(id:string):Observable<CreateTodo>{
    return this.http.delete<CreateTodo>(this.base_Url+`/todo/${id}`)
  }
  updateTodos(data:CreateTodo,id:string):Observable<CreateTodo>{
    return this.http.put<CreateTodo>(this.base_Url+`/todo/${id}`,data)
  }
}
