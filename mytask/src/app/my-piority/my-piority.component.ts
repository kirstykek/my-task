import { Component, OnInit } from '@angular/core';
import{TaskService} from './../service/task.service';
@Component({
  selector: 'app-my-piority',
  templateUrl: './my-piority.component.html',
  styleUrls: ['./my-piority.component.css']
})
export class MyPiorityComponent implements OnInit {


  tasksarray
  constructor(public taskService:TaskService) { 
    this.tasksarray=this.taskService.newtask()
  }
Delete(tasks){
this.taskService.Delete(tasks)
}

  ngOnInit() {
  }





}
