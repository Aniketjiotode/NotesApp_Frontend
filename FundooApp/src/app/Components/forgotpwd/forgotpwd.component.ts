import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  forgotform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
  });

  forgotsubmit(){
    let data={
      email:this.forgotform.value.email,
    }
    this.userservice.forgotpassword(data).subscribe((response:any) => {
      console.log(response.message);
    })}
}
