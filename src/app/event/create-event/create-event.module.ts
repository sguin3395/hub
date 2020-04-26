import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event.component';
import { AppMatModule } from '../../app-mat.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CreateEventComponent
    ],
    imports: [
        FormsModule,
        AppMatModule,
        CommonModule
    ],
    providers: []
})

export class CreateEventModule { }