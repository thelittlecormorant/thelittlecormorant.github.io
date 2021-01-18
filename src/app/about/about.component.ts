import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // private final String ONE_PAGE_PATH = "../assets/AnbuOnePage.pdf";
  // private final String FULL_RESUME_PATH = "../assets/AnbuOnePage.pdf";

  constructor() { }

  ngOnInit(): void {
  }

  onPress1Page(){
    window.open('../assets/AnbuOnePage.pdf', '_blank');
  }

  onPressFullPage(){
    window.open('../assets/AnbuFull.pdf', '_blank');
  }

}
