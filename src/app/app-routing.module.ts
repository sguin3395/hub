import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'register',
    component: LoginComponent
}, {
    path: 'artists',
    component: ArtistComponent
}, {
    path: 'events',
    component: EventComponent
}, {
    path: '',
    component: HomeComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
