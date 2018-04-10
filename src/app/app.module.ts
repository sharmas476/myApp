import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';

const routes : Routes = [
  {path: 'users', component: UserComponent},
  {path: 'adduser', component: NewuserComponent},
  {path: '**', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    UserDetailsComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
