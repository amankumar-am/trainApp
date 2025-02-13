import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, IPassenger } from '../../../model/interface/objectTypes';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth/auth.service';
import { PassengerService } from '../../../services/passenger/passenger.service';

@Component({
  selector: 'app-passenger',
  imports: [CommonModule],
  templateUrl: './passenger.component.html',
  styleUrl: './passenger.component.css'
})
export class PassengerComponent implements OnInit {
  passengerList: IPassenger[] = [];
  http = inject(HttpClient);
  constructor(public authService: AuthService, public passengerService: PassengerService) { }

  ngOnInit(): void {
    this.getPassengers();
  }


  getPassengers() {
    this.passengerService.getAllPassengers().subscribe({
      next: (response: APIResponseModel) => {
        this.passengerList = response.data.slice(0, 10);
      }, error: (error) => {
        console.log(error);
      }
    });
  }
}