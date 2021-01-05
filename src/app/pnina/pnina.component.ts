import { Component, OnInit, ViewChild } from '@angular/core';
import { BetweenCompService } from '../between-comp.service';
import {NavMenuComponent} from '../nav-menu/nav-menu.component';


export interface Transaction {
  item: string;
  cost: string;
}
@Component({
  selector: 'app-pnina',
  templateUrl: './pnina.component.html',
  styleUrls: ['./pnina.component.css']
})
export class PninaComponent implements OnInit {
  @ViewChild(NavMenuComponent) navMenuComponent;
 
  constructor(private betweenCompService: BetweenCompService) { 
  }

  isMainPage : boolean;
  isOdotPage : boolean;
  isGaleryaPage : boolean;
  isPricePage : boolean;

  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'עוגת שכבה אחת', cost:  "שח 10"},
    {item: 'עוגת שתי שכבות', cost: "שח 10"},
    {item: 'מאפים קטנים', cost: "שח 10"},
    {item: 'אירוע ל-20 איש', cost: "שח 10"},
    {item: 'אירוע ל-40 איש', cost: "שח 10"},
    {item: 'אירוע ל-60 איש', cost: "שח 10"},
  ];

  /** Gets the total cost of all transactions. */

  isNavIsVisible : string;
  ngOnInit(): void {
    this.makeNavNotVisible();
    this.isMainPage = true;
    this.isPricePage = false;
  }
  makeNavNotVisible() {
    this.betweenCompService.changeMessage("false");
  }

  makeMainVisible(){
    this.isMainPage = true;
    this.isOdotPage = false;
    this.isGaleryaPage = false;
    this.isPricePage = false;
  }
  makeOdotVisible(){
    this.isMainPage = false;
    this.isOdotPage = true;
    this.isGaleryaPage = false;
    this.isPricePage = false;
  }
  makeGaleryaVisible(){
    this.isMainPage = false;
    this.isOdotPage = false;
    this.isGaleryaPage = true;
    this.isPricePage = false;
  }
  makePriceVisible(){
    this.isMainPage = false;
    this.isOdotPage = false;
    this.isGaleryaPage = false;
    this.isPricePage = true;
  }

}
