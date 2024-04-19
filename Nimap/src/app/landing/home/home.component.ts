import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


 constructor(public dialog: MatDialog){}


  openDialog(){
    this.dialog.open(UserRegistrationComponent,{
      width:'60px',
      height:'400px',
      data:{},
    })
  }
 
  }

