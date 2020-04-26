import { Component, OnInit } from '@angular/core';

interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  public eventType: any;
  constructor() { }

  ngOnInit(): void {
  }
  genres: Genre[] = [
    {value: 'comedy-0', viewValue: 'Comedy'},
    {value: 'dance-1', viewValue: 'Dance'},
    {value: 'music-2', viewValue: 'Music'},
    {value: 'storytelling-3', viewValue: 'Storytelling'}
  ];
}
