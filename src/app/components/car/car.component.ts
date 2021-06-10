import {Component, Input} from '@angular/core';
import {Cars} from "../../models/Cars";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
car:Cars;

}
