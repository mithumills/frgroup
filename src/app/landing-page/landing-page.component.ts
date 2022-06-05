import { Component, NgModule, OnInit } from '@angular/core';

declare let Email: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    const message= `Thanks for contacting`
    alert(message);
      
  }

}
