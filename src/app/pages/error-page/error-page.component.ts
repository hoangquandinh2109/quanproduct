import { Component } from '@angular/core';
import {Location} from '@angular/common'
import { from } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: []
})
export class ErrorPageComponent {
  constructor(public location: Location){ }
  goback(){
    this.location.back();
  }
}


