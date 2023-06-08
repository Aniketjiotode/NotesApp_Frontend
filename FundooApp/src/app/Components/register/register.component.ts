import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  registerform=new FormGroup({
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]),
    confirm: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]),
  },
  {
  }
  );

  password(formGroup: FormGroup) {
    const password  = formGroup.get('password');
    const  confirmPassword  = formGroup.get('confirm');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  registersubmit(){
    let data={
      fname:this.registerform.value.fname,
      lname:this.registerform.value.lname,
      email:this.registerform.value.email,
      password:this.registerform.value.password
    }
    this.userservice.register(data).subscribe((response:any) => {
      console.log(response.message);
    })
  }

  
  getErrorMessage() {
    if (this.registerform.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerform.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }
 

}
