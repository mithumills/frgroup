import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar-demos',
    templateUrl: './sidebar-demos.component.html',
    styleUrls: ['./sidebar-demos.component.scss']
})
export class SidebarDemosComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}