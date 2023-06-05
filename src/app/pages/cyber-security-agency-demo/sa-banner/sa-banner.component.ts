import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-sa-banner',
    templateUrl: './sa-banner.component.html',
    styleUrls: ['./sa-banner.component.scss']
})
export class SaBannerComponent implements OnInit {



    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void { }

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}