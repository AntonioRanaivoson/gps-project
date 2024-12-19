import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginPageModule } from './login-page/login-page.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NeedAuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    //canActivate: [NeedAuthGuard]
  },
  {
    path: 'user',
    component: UserPageComponent,
    //canActivate: [NeedAuthGuard]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginPageModule,
    HttpClientModule
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
