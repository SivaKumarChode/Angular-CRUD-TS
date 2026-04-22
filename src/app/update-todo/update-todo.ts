import { Component, inject, OnInit } from '@angular/core';
import { Apis } from '../services/apis';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  imports: [FormsModule],
  templateUrl: './update-todo.html',
  styleUrl: './update-todo.css',
})
export class UpdateTodo  implements OnInit{
  updateData=inject(Apis)
  router=inject(Router)
  route=inject(ActivatedRoute)
  id!:string
  
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id")!
  }

  UpdateFormData={
    todo:"",
    description:"",
    status:false
  }
  updateTodo(e:Event){
    e.preventDefault()
    this.updateData.updateTodos(this.UpdateFormData,this.id).subscribe((res)=>{
      console.log(res);
      
    })
    this.router.navigate(["/"])
  }
}
