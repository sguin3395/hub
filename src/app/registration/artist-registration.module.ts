import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtistRegistrationComponent } from './artist-registration.component';
import { AppMatModule } from '../app-mat.module';

@NgModule({
    declarations: [
        ArtistRegistrationComponent
    ],
    imports: [
        FormsModule,
        AppMatModule
    ],
    providers: []
})

export class ArtistRegistrationModule { }