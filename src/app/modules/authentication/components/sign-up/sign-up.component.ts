import { Component, OnInit } from '@angular/core';
import { genderType } from 'src/app/data/models/types';

@Component({
  selector: 'fg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // PROPERTIES
  public gender: genderType;

  // CONSTRUCTOR
  constructor() {
    this.gender = 'male';
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
  }

  // METHODS
  public changeGender(event: boolean):void {
    this.gender = (event) ? 'male' : 'female';
  }
}
