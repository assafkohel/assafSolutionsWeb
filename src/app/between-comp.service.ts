import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetweenCompService {
  is_HE_EN: boolean;
  private subject = new Subject<any>();
  sendClickEvent(tr_fl:boolean) {
    this.subject.next(tr_fl);
    this.is_HE_EN = tr_fl;
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
  public is_En_He: boolean;

  changeLanguage(true_false : boolean)
  {
    this.is_En_He = true_false; 
  }
}
