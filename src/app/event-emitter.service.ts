import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeChangeLanguageHome = new EventEmitter();
  invokeChangeLanguageAboutMe = new EventEmitter();
  invokeChangeLanguageDescription = new EventEmitter();

  constructor() { }

  onChangeLanguage(language:string) {
    this.invokeChangeLanguageHome.emit(language);
    this.invokeChangeLanguageAboutMe.emit(language);
    this.invokeChangeLanguageDescription.emit(language);
  }    
}
