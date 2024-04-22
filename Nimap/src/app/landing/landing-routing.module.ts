import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:UserRegistrationComponent},
  {path:'profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
