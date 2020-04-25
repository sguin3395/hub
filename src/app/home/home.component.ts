import { Component, OnInit } from '@angular/core';
import { APPCONSTANTS } from '../app.constants';
import { EventService } from '../services/event.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public imgPath: string = APPCONSTANTS.PATH + 'login.png';
    public countries: Array<string> = [];
    constructor(private eventService: EventService){}
    ngOnInit(){
        this.eventService.getCountries().subscribe((countries: Array<any>) => {
            this.countries = countries.map(item => item.name);
            console.log(this.countries);
        });
    }
}
