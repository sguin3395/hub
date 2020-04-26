import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { IEvents } from '../models';
import { APPCONSTANTS } from '../app.constants';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
    public events: Array<IEvents> = [];
    public path: string = APPCONSTANTS.PATH + 'b1.jpg';
    constructor(private eventService: EventService, public dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.eventService.getEventsLocal().subscribe((eventResponse: any) => {
            if (eventResponse && eventResponse.data && eventResponse.data.dataRecords) {
                this.events = this.processEventResponse(eventResponse.data.dataRecords);
                console.log(this.events);
            }
        });
    }
    public processEventResponse = (dataRecords: Array<any>) => {
        const events: Array<IEvents> = [];
        dataRecords.forEach((record) => {
            const event: IEvents = {
                eventName: record.eventName,
                eventDate: record.eventDate,
                eventGenre: record.eventGenre,
                artist: record.eventArtist,
                host: record.host,
                isPaid: record.isPaidEvent
            };
            events.push(event);
        });
        return events;
    }
    public openDialog(){
        this.router.navigate(['/create-event']);
    }
}
