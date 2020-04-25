
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AppMatModule } from '../app-mat.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        AppMatModule
    ],
    providers: []
})

export class LoginModule { }
