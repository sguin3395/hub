import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRegistrationComponent } from './artist-registration.component';

describe('ArtistRegistrationComponent', () => {
  let component: ArtistRegistrationComponent;
  let fixture: ComponentFixture<ArtistRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
