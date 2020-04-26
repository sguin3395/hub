import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AppMatModule } from '../app-mat.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        // HomeComponent
    ],
    imports: [
        FormsModule,
        AppMatModule,
        CommonModule,
        ReactiveFormsModule
    ],
    // exports: [HomeComponent],
    providers: []
})

export class HomeModule { }
