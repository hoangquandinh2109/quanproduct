import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarService } from '../../services/core/sidebar.service';

@Component({
    selector: 'school-layout-client',
    templateUrl: './layout-client.component.html',
    styleUrls: ['./layout-client-style.css']
})

export class LayoutClientComponent implements OnInit, AfterViewInit {
    
    @ViewChild('drawer') public drawer: MatDrawer;

    constructor(private sidebarService: SidebarService) {
    }


    ngAfterViewInit(): void {
        this.sidebarService.setDrawer(this.drawer);
    }

    ngOnInit() {
    }
}