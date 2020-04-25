import { Component } from '@angular/core';
import { APPCONSTANTS } from '../app.constants';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})

export class NavbarComponent {
    public logoPath = APPCONSTANTS.PATH + 'ArtHub.jpg';
}
