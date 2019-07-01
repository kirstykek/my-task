import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,RequiredValidator} from'@angular/forms';
import{TaskService} from './../service/task.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-my-tasklist',
  templateUrl: './my-tasklist.component.html',
  styleUrls: ['./my-tasklist.component.css']
})
export class MyTasklistComponent implements OnInit {
  tasksarray;
  Taskname
  Taskpriority
  Date

  constructor(public taskService:TaskService) { 
    this.tasksarray=this.taskService.gettasks();
  }
  Add(){
    this.taskService.Add(this.Taskname,this.Taskpriority,this.Date)

    
  }

  ngOnInit() {
  }
Delete(task){this.taskService.Delete(task)}
}

