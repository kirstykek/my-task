import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TaskService {



task=[];

  

constructor(public taskService:TaskService){}

newtask(){
  return this.task

}
Add(Taskname,Taskpriority,Date){
this.task.push({TaskName:Taskname,PriorityName:Taskpriority,Datee:Date})
}
Delete(task){
  let index=this.task.indexOf(task);
  this.task.splice(index, 1);
}
gettasks(){
  return this.task
}
}
