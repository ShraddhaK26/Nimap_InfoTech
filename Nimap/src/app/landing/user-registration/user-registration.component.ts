import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApicallService } from 'src/app/services/apicall.service';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  age:any
editId:any
addressData:any;
tags:any=[]
homeAddress:any=[]
allData:any=[]
singleData:any=[]
addChipName:any
registerFormData!:FormGroup



 

  
 

  constructor(private fb: FormBuilder,private apicall:ApicallService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.editId=this.apicall.editId
     if(this.editId){
  
    
   this.apicall.getApiCall().subscribe(res=>{
    this.allData=res
   
    this.allData.filter((ele:any)=>{
      if(ele.id==this.editId){
  this.singleData=ele
  this.postApiData()
  
      }
    })
  })
 
  
     }
     else{
    this.postApiData()
     }
    //  this.postApiData()
  }

  
   postApiData(){
    console.log(this.singleData.fName);
    
  this.registerFormData=this.fb.group({
    img:[this.editId?this.singleData[0]?.img:''],
    fName:[this.editId?this.singleData.fName:'',[Validators.required,Validators.pattern(/[A-Za-z]/g),Validators.maxLength(20)]],
    lName:[this.editId?this.singleData.lName:''],
    email:[this.editId?this.singleData.email:''],
    contact:[this.editId?this.singleData.contact:''],
    age:[this.editId?this.singleData.age:''],
    state:[this.editId?this.singleData.state:'State'],
    country:[this.editId?this.singleData.country:'Country'],
    address:[this.editId?this.singleData.address:'Address'],
    chips:[this.editId?this.singleData.chips:this.tags],
    homeAddress:this.fb.group({
      address1:[this.editId?this.singleData.homeAddress.address1:''],
      address2:[this.editId?this.singleData.homeAddress.address2:'']
     }),
     companyAddress:this.fb.group({
      comAdd1:[this.editId?this.singleData.homeAddress.comAdd1:''],
      comAdd2:[this.editId?this.singleData.homeAddress.comAdd1:'']
     })
    
  })


    
  }

  submit(){
this.apicall.postApiCAll(this.registerFormData.value).subscribe(res=>{
  console.log(res);
 alert('Data Submited Successfully')
 this.dialog.closeAll()
  
})
  }

  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  add(){
    const input = document.getElementById('inputChip1') as HTMLInputElement | null;

const value = input?.value;
// console.log(value) 

this.tags.push(value)




  }
  remove(data:any){
    let empty:any=[]
    this.tags.filter((ele:any)=>{
      if(ele!=data){
    empty.push(ele)
      }
    })
   this.tags=empty

  
    
  }
  address(data:any){
console.log(data);
    this.addressData=data

  }
  edit(id:any){
this.apicall.patchApi(id,this.registerFormData.value).subscribe(res=>{
  this.postApiData()
  alert('Data Updated Successfully .....')
  this.dialog.closeAll();
 
})

  }

  exit(){
    this.dialog.closeAll()
  }

  formatLabel(value: number): string {
    // console.log("value"+value);
  this.age=value
    return `${value}`;
 
    
  }

  


ngOnDestroy(){
  this.apicall.editId=''
  this.editId=''

}

  
  }
