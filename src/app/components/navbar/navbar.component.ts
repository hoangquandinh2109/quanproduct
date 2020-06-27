import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/core/authentication.service';
import { SidebarService } from '../../services/core/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  userInfo: any
  constructor(
    private sidebarService: SidebarService,
    private auth: AuthenticationService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('currentUser')) || {fullName: 'No name'};
  }
  toggleRightSidenav() {
    this.sidebarService.toggle();
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/dangnhap']);
  }
}
