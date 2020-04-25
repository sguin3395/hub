import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { ArtistComponent } from './artist/artist.component';
import { AppMatModule } from './app-mat.module';
import { EventModule } from './event/index';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ArtistComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        LoginModule,
        AppMatModule,
        EventModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
