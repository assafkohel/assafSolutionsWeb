import { Component } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-AboutMe-component',
  templateUrl: './AboutMe.component.html'
})
export class AboutMeComponent {
  constructor(private eventEmitterService: EventEmitterService,
    public translate:TranslateService) {

  }


  is_En_or_He: boolean; //true = Hebrew ,  false = English

  title_En = "About me:"
  li_1_En = "Certification: BSc - Computer Engineer.";
  li_2_En = "Age: 29.";
  li_3_En = 'Proven experience with "Elbit Systems" projects: WPF C# , Matlab, Python , angular development and more...';

  title_He = ":קצת עלי";
  li_1_He = "גרפים מותאמים אישית - להגדלת ההכנסות";
  li_2_He = "הדרכה אישית בפרוייקט";
  li_3_He = "תמיכה מתמשכת בתחזוקה";

  title: string;
  li_1: string;
  li_2: string;
  li_3: string;

  rtl_ltr: boolean;//false"left" or "true=right"

  ngOnInit(): void {
    this.title = this.title_En;
    this.li_1 = this.li_1_En;
    this.li_2 = this.li_2_En;
    this.li_3 = this.li_3_En;
    this.rtl_ltr = this.is_En_or_He;

  }

  changeLanguage(language: string) {
    if (language=="HE") {
      this.title = this.title_He;
      this.li_1 = this.li_1_He;
      this.li_2 = this.li_2_He;
      this.li_3 = this.li_3_He;
      this.rtl_ltr = this.is_En_or_He;
    }
    else {
      this.title = this.title_En;
      this.li_1 = this.li_1_En;
      this.li_2 = this.li_2_En;
      this.li_3 = this.li_3_En;
      this.rtl_ltr = this.is_En_or_He;
    }
  }
}
