import { Component } from '@angular/core';
import { APPCONSTANTS } from './app.constants';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public logoPath = APPCONSTANTS.PATH + 'ArtHub.png';
    title = 'hub';
}
