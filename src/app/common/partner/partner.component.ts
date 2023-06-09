import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
    backgroundStyle: any = {};
    constructor(
        public router: Router
    ) { }

    ngOnInit(): void { }

}