import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import {BidiModule, Directionality} from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document )
  {

  }

ngOnInit(){

}

  title = 'app';
}

