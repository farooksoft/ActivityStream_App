import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { UserService } from './user.service';
import { CircleService } from './circle.service';
import { MessageService } from './message.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CircleComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule
  ],
  providers: [UserService, CircleService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
