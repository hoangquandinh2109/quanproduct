import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarService } from '../../services/core/sidebar.service';

@Component({
    selector: 'school-layout-management',
    templateUrl: './layout-management.component.html',
})

export class LayoutManagementComponent implements OnInit, AfterViewInit {
    
    @ViewChild('drawer') public drawer: MatDrawer;

    constructor(private sidebarService: SidebarService) {
    }


    ngAfterViewInit(): void {
        this.sidebarService.setDrawer(this.drawer);
    }

    ngOnInit() {
    }
}