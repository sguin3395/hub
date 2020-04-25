import { NgModule } from '@angular/core';

import { EventComponent } from './event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AppMatModule } from '../app-mat.module';

@NgModule({
    declarations: [
        EventComponent,
        CreateEventComponent
    ],
    imports: [
        AppMatModule
    ],
    providers: []
})

export class EventModule { }
