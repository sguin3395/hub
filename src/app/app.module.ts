import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ArtistRegistrationModule } from './registration/artist-registration.module';
import { HomeModule } from './home/home.module';
import { CreateEventModule } from './event/create-event/create-event.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { ArtistComponent } from './artist/artist.component';
import { AppMatModule } from './app-mat.module';
import { EventModule, EventComponent } from './event/index';
import { HomeComponent } from './home/home.component';




@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ArtistComponent,
        HomeComponent,
        EventComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        LoginModule,
        AppMatModule,
        EventModule,
        HttpClientModule,
        ArtistRegistrationModule,
        CreateEventModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
