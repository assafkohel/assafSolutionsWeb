import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetweenCompService {
public isNotPnina:boolean;

private messageSource = new BehaviorSubject('true');
currentMessage = this.messageSource.asObservable();

constructor(){}

changeMessage(message: string) {
  this.messageSource.next(message)
}


}
