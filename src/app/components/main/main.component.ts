import { Component, OnInit} from '@angular/core';
import { fade, fadeBlue, fadeGreen, fadeOrange } from '../../animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    fade,
    fadeBlue,
    fadeGreen,
    fadeOrange
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
