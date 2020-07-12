import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestingComponent } from './testing/testing.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { JWtInterCeptorService } from './auth/jwt-inter-ceptor.service';
import { JwtUnAuthorizedInterceptorService } from './auth/jwt-un-authorized-interceptor.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksComponent } from './user/tasks/tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    LoginComponent,
    SignUpComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWtInterCeptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
