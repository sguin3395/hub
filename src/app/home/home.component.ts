import { Component, OnInit } from '@angular/core';
import { APPCONSTANTS } from '../app.constants';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    //public imgPath: string = APPCONSTANTS.PATH + 'login.png';
    myControl = new FormControl();
    public countries: Array<string> = [];
    public filteredOptions: Observable<string[]>;
    constructor(private eventService: EventService){}
    ngOnInit(){
        this.eventService.getCountries().subscribe((countries: Array<any>) => {
            this.countries = countries.map(item => item.name);
            console.log(this.countries);
        });
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.countries.filter(country => country.toLowerCase().includes(filterValue));
      }
}
