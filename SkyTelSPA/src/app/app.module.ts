import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';

import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MediaComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutUsComponent,
    CareersComponent,
    NavbarComponent,
    HomeComponent,
    BusinessComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'', component: HomeComponent
      },
      {
        path:'aboutus', component: AboutUsComponent
      },
      {
        path: 'contactus', component: ContactUsComponent
      },
      {
        path: 'careers', component: CareersComponent 
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'business',component: BusinessComponent
      }
      ,
      {
        path: 'media',component: MediaComponent
      },
      {
        path: '**',component: NotfoundComponent
      }
    ])
   /* RouterModule.forChild([
      {
        path:'home', component: HomeComponent
      },
      {
        path:'aboutus', component: AboutUsComponent
      },
      {
        path: 'contactus', component: ContactUsComponent
      },
      {
        path: 'careers', component: CareersComponent 
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'business',component: BusinessComponent
      },
      {
        path: '**',component: NotfoundComponent
      }
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
