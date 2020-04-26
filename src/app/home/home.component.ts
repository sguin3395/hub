import { Component, OnInit } from '@angular/core';
import { APPCONSTANTS } from '../app.constants';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // public imgPath: string = APPCONSTANTS.PATH + 'login.png';
    countryControl = new FormControl();
    genreControl = new FormControl();
    artistControl = new FormControl();

    public countries: Array<string> = [];
    public filteredCountries: Array<string>;

    public genres: Array<string>;
    public filteredGenres: Array<string>;

    public artists: Array<string>;
    public filteredArtists: Array<string>;

    constructor(private eventService: EventService) { }
    ngOnInit() {
        this.eventService.getCountries().subscribe((countries: Array<any>) => {
            this.countries = countries.map(item => item.name);
        });

        this.genres = ['Comedy', 'Dance', 'Music', 'Storytelling'];
        this.artists = ['Dwayne Johnson', 'Kevin Hart', 'Katy Perry', 'Kenny Sebastian'];
        
        this.countryControl.valueChanges.subscribe((item) => {
            console.log(item);
            this.filteredCountries = this.countries.filter(country => country.toLowerCase().includes(item));
        });

        this.genreControl.valueChanges.subscribe((item1) => {
            console.log(item1);
            this.filteredGenres = this.genres.filter(genre => genre.toLowerCase().includes(item1));
        });

        this.artistControl.valueChanges.subscribe((item2) => {
            console.log(item2);
            this.filteredArtists = this.artists.filter(artist => artist.toLowerCase().includes(item2));
        });
    }
}
