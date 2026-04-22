import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Apis } from '../services/apis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crate-todo',
  imports: [FormsModule],
  templateUrl: './crate-todo.html',
  styleUrl: './crate-todo.css',
})
export class CrateTodo {
  createTodoFile=inject(Apis)
  router=inject(Router)
  formData={
    todo:"",
    description:""
  }

  createTodo(e:any){
    e.preventDefault()
    this.createTodoFile.createTodo(this.formData).subscribe((res)=>{
      console.log(res);
      this.router.navigate(["/"])
    })
  }

}
