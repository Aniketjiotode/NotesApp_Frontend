import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pAssword: new FormControl('',[Validators.required,Validators.minLength(6)])
    
  });

  loginsubmit(){
    let data={
      email:this.loginform.value.email,
      pAssword:this.loginform.value.pAssword
    }
    this.userservice.login(data).subscribe((response:any) => {
      console.log(response.message);
      localStorage.setItem('token',response.data)
    })
  }
  forgot(){
    this.router.navigateByUrl('/forgot')
  }

  getErrorMessage() {
    if (this.loginform.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginform.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  pwdErrorMessage() {
    return this.loginform.get('pAssword')?.hasError(`required`) ? 'Invalid password' : '';   
  }
}
