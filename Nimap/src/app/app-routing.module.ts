import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { UserRegistrationComponent } from './landing/user-registration/user-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './landing/user-profile/user-profile.component';

const routes: Routes = [
  {path:'landing',loadChildren:()=>import('./landing/landing.module').then(m=>m.LandingModule)},
  {path:'',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'register',component:UserRegistrationComponent},
  {path:'profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
