import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ma-about',
    templateUrl: './ma-about.component.html',
    styleUrls: ['./ma-about.component.scss']
})
export class MaAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}