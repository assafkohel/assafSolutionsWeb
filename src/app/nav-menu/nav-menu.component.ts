import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { TranslateService } from '@ngx-translate/core'
import { browser } from 'protractor';
import { Subscription } from 'rxjs';
import { BidiModule, Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
    /** Whether the widget is in RTL mode or not. */
    private isRtl: boolean;

    /** Subscription to the Directionality change EventEmitter. */
    private _dirChangeSubscription = Subscription.EMPTY; 

    
  constructor(
    private eventEmitterService: EventEmitterService,
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
 )
  {
    translate.addLangs(['en', 'he']);
    translate.setDefaultLang('he');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|he/) ? browserLang : 'he');
  }


  isExpanded: boolean;

  ngOnInit() {
  }

  collapse() {
    this.isExpanded = false;
  }

  
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  translateToLanguage(lang:string){
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "he" ? "rtl" : "ltr";
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.changeCssFile(lang);
  }

  changeCssFile(lang:string)
  {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === "he" ?  "hebrewStyle.css":"englishStyle.css";
    if (existingLink) {
       existingLink.href = bundleName;
    } else {
       let newLink = this.document.createElement("link");
       newLink.rel = "/stylesheet";
       newLink.type = "text/css";
       newLink.id = "langCss";
       newLink.href = bundleName;
       headTag.appendChild(newLink);
    }
  }
}
