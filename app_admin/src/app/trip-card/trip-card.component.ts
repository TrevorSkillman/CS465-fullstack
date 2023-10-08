import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: Trip;
  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
  }

  private editTrip(trip: Trip):void{
    console.log('Inside TripListingComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

}