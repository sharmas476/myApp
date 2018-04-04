import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    UserDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'users', component: UserComponent}
    ]),
  ],
  providers: [
    UserService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
