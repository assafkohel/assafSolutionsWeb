import { Component } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public translate: TranslateService) { }
  
  ngOnInit(): void
  {

  }

}
