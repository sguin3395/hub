import { Component, OnInit } from '@angular/core';
import { APPCONSTANTS } from '../app.constants';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public imgPath: string = APPCONSTANTS.PATH + 'login.png';
    ngOnInit(){}
}
