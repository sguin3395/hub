import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AppMatModule } from '../app-mat.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        FormsModule,
        AppMatModule
    ],
    providers: []
})

export class HomeModule { }