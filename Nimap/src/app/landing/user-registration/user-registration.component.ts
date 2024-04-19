import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {


  employeeForm! : FormGroup
  ok: any;
  endPoint:any='emp'
  sbmitbtn: any=true;
    editId: any;
    ediData: any;
    shraddha:any
  
    constructor( private fb:FormBuilder){}
  ngOnInit(){
   this.getData();
    
  }
  
  getData(){
  this.employeeForm=this.fb.group({
    fname:[this.ediData?this.ediData[0]?.fname:'',[Validators.required]],
    lname:[this.ediData?this.ediData[0]?.lname:'',[Validators.required]],
    email:[this.ediData?this.ediData[0]?.email:'',[Validators.required]],
    dob:[''],
    gender:[''],
    education:[this.ediData?this.ediData[0]?.education:'',[Validators.required]],
    company:[this.ediData?this.ediData[0]?.company:'',[Validators.required]],
    exp:[this.ediData?this.ediData[0]?.exp:'',[Validators.required]],
    package:[this.ediData?this.ediData[0]?.package:'',[Validators.required]]
  
  })
  }

  
}
