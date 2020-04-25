import { Component, OnInit } from '@angular/core';
import { APPCONSTANTS } from '../app.constants';
@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
    public imgPath = APPCONSTANTS.PATH + 'atrist.png';
    constructor() { }
    ngOnInit(): void {
    }
}
