import { NgModule } from '@angular/core';

import { EventComponent } from './event.component';
import { AppMatModule } from '../app-mat.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        // EventComponent
    ],
    imports: [
        CommonModule,
        AppMatModule
    ],
    // exports: [EventComponent],
    providers: []
})

export class EventModule { }
