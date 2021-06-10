import { Component, OnInit } from '@angular/core';
import {Cars} from "../../models/Cars";
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
cars:Cars[];

  constructor(private carsService:CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(value => this.cars = value)
  }

}
