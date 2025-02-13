import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, IStation } from '../../../model/interface/objectTypes';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth/auth.service';
import { StationService } from '../../../services/station/station.service';

@Component({
  selector: 'app-station',
  imports: [CommonModule],
  templateUrl: './station.component.html',
  styleUrl: './station.component.css'
})
export class StationComponent implements OnInit {
  stationList: IStation[] = [];
  http = inject(HttpClient);
  constructor(public authService: AuthService, public stationService: StationService) { }

  ngOnInit(): void {
    this.getStations();
  }

  getStations() {
    this.stationService.getAllStations().subscribe({
      next: (response: APIResponseModel) => {
        this.stationList = response.data;
      }, error: (error) => {
        console.log(error);
      }
    });
  }
}
