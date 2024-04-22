import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApicallService } from 'src/app/services/apicall.service';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  data:any=[]
  constructor( public apicallService:ApicallService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getData()
    

    
  }
  
  getData(){
    this.apicallService.getApiCall().subscribe(res=>{
      this.data=res
      console.log(res);
     
      
    })

  }
  openDialog(data:any){
   
   
    
  this.apicallService.editId=data
    this.dialog.open(UserRegistrationComponent, {
      
    });
  }
  open(){
    console.log('hello');
    
  }
  
}








