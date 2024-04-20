import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/services/apicall.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {


  employeeForm!: FormGroup
  ok: any;
  endPoint: any = 'posts'
  sbmitbtn: any = true;
  editId: any;
  ediData: any;
  shraddha: any

  constructor(private fb: FormBuilder,private apicall:ApicallService) { }

  ngOnInit() {
    this.getData();
    console.log(this.getData);

  }


  getData() {
    this.employeeForm = this.fb.group({
      fname: ['', [Validators.required,Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      lname: [this.ediData ? this.ediData[0]?.lname : '',  [Validators.required]],
      email: [this.ediData ? this.ediData[0]?.email : '',  [Validators.required]],
      contact: ['', [Validators.required]],
      age: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: [this.ediData ? this.ediData[0]?.education : '', [Validators.required]],
      addr: [this.ediData ? this.ediData[0]?.company : '',      [Validators.required]],
      tags: [this.ediData ? this.ediData[0]?.exp : '',          [Validators.required]],

    })
  }

  submit() {
   this.apicall.postApiCall(this.endPoint,this.employeeForm.value).subscribe(ele=>{
    console.log(ele);
    if(ele){
      alert("Data Submited Succesfully...!!!")
    }
    
   })
  }


 

  
    }

   
