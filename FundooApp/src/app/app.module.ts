import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpwdComponent } from './Components/forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './Components/resetpwd/resetpwd.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { IconComponent } from './Components/icon/icon.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './Components/trash/trash.component';
import { AuthguardService } from './Services/authguard/authguard.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    ResetpwdComponent,
    HomepageComponent,
    CreatenotesComponent,
    IconComponent,
    DisplayNotesComponent,
    GetNotesComponent,
    UpdatenoteComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatListModule,
     MatDialogModule,
     MatMenuModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
