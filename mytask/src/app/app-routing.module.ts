import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTasklistComponent } from './my-tasklist/my-tasklist.component';
import { MyPiorityComponent } from './my-piority/my-piority.component';
const routes: Routes = [
  {path:'mytasklist',component:MyTasklistComponent},
  {path:'mypiority', component:MyPiorityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
