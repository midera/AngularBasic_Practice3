import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../services/cars.service";
import {Cars} from "../../models/Cars";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent  {

  myForm = new FormGroup({
      model: new FormControl(''),
      year: new FormControl(''),
      price: new FormControl('')
    }
  );

  newCar: Cars;
  done: boolean = false;


  constructor(private carService: CarsService) {
  }

  sendData() {
    return this.carService.postCar(this.myForm.value).subscribe(value => {
        this.newCar = value;
        this.done = true
      },
      error => console.log(error));
  }
}
