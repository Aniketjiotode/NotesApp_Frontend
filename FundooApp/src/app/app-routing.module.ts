import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpwdComponent } from './Components/forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './Components/resetpwd/resetpwd.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { IconComponent } from './Components/icon/icon.component';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { TrashComponent } from './Components/trash/trash.component';
import { AuthguardGuard } from './Auth/authguard.guard';


const routes: Routes = [
  {
    path:'logindemo',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgot',
    component:ForgotpwdComponent
  },
  {
    path:'reset/:token',
    component:ResetpwdComponent
  },{
    path:'homepage',
    component:HomepageComponent,
    canActivate:[AuthguardGuard],
    children:[
      {path:'',redirectTo:"/homepage/note",pathMatch:'full'},
      {
        path:'note',component:GetNotesComponent,
      },
      {
        path:'trash', component:TrashComponent

      }
    ]
  },
  {
    path:'icon',
    component:IconComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
