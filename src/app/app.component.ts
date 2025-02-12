import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { MatPaginatorIntl } from '@angular/material/paginator';
import { AuthenticationService } from './services/core/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public showOverlay = true;

  constructor(private router: Router, private matCus: MatPaginatorIntl, private authenticationService: AuthenticationService) {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      const now = new Date();
      const accessTokenExpiration = new Date(currentUser.accessTokenExpiration);
      if (now.getTime() > accessTokenExpiration.getTime()) {
        this.authenticationService.logout();
        this.router.navigate(['/dangnhap']);
      }
    }
    this.setOverlay(true);
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })

    matCus.itemsPerPageLabel = 'Số mục trên trang';
    matCus.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        return 'Không có mục nào';
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} của ${length}`;
    }
  }

  navigationInterceptor(event: RouterEvent): void {
    // if (event instanceof NavigationStart) {
    //   this.setOverlay(true);
    // }
    if (event instanceof NavigationEnd) {
      this.setOverlay(false);
    }
    if (event instanceof NavigationCancel) {
      this.setOverlay(false);
    }
    if (event instanceof NavigationError) {
      this.setOverlay(false);
    }
  }
  setOverlay(isShow: boolean) {
    setTimeout(() => {
      this.showOverlay = isShow;
    }, 1000);
  }
}
