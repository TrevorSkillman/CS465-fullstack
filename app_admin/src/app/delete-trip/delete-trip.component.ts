import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';


@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  tripCode: string;

  constructor(
    private tripService: TripDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tripCode = localStorage.getItem("tripCode");
  }

  deleteTrip(){
    this.tripService.deleteTrip(this.tripCode)
    .then(() => {
      console.log("Trip Deleted Successfully");
      this.router.navigate(['/trip-listing']); 
    })
    .catch(err => {
      console.error("Error deleting trip: ", err);
    });
  }

}
