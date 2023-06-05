import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csa-funfacts',
  templateUrl: './csa-funfacts.component.html',
  styleUrls: ['./csa-funfacts.component.scss']
})
export class CsaFunfactsComponent implements OnInit {
  count1 = 2200;
  count2 = 1200;
  count3 = 650;
  count4 = 10;
  duration = 2000;
  constructor() { }

  ngOnInit(): void {
  }

}
