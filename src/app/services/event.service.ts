import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    constructor( private http: HttpClient) { }
    public getEvents = () => {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + 'Yzk1MmQ4ZGEtN2M0NC00ZWU3LThhMjMtMTIwY2RjYzM5NjM3'
         });
        const URL = 'https://api.stryke.io/v0/arthub/data?entityType=event';
        return this.http.post(URL, '', {
            headers: reqHeader
        });
    }
    public getEventsLocal = () => {
        const URL = './assets/data/events.json';
        return this.http.get(URL);
    }
    public getCountries = () => {
        const URL = 'https://restcountries.eu/rest/v2/all';
        return this.http.get(URL);
    }
}
