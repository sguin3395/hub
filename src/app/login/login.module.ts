
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        MatSliderModule
    ],
    providers: []
})

export class LoginModule { }
