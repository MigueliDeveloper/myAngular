import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cardWitchMultiSections',
  templateUrl: './cardWithMultiSections.component.html',
  styleUrls: ['./cardWithMultiSections.component.css'],
  standalone: true,
  imports:[MatCardModule],

})
export class CardWitchMultiSectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
