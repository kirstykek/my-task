import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule} from '@angular/material';
import { MyTasklistComponent } from './my-tasklist/my-tasklist.component';
import { MyPiorityComponent } from './my-piority/my-piority.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyTasklistComponent,
    MyPiorityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatInputModule,
     MatFormFieldModule,
     MatCardModule,
     ReactiveFormsModule,
     FormsModule,
     MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
