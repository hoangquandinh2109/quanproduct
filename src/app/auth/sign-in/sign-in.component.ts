import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/core/authentication.service';
import { UtilsService } from 'src/app/services/core/utils.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {
  response: any;
  returnUrl: string;
  loadingLogin = false;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  validateMode = false;
  hidePassword = true;
  showAppmobile = false;
  formLoginOpened = false;
  typeUserLoginName: string;

  constructor(private router: Router,
    private utilsService: UtilsService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {
  }
  ngAfterViewInit(): void {
    this.showAppmobile = true;
  }
  ngOnInit() {
    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.valid) this.validateMode = false;
      else this.validateMode = true;
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.uid) {
      this.router.navigate([this.returnUrl]);
    }
  }
  validate(controlName: string) {
    return this.loginForm.controls[controlName].hasError('required') && this.validateMode;
  }
  login() {
    this.validateMode = true;
    if (this.loginForm.valid) {
      const _this = this;
      this.loadingLogin = true;
      const loginForm = this.loginForm.value;
      
      if(loginForm.username == 'admin' && loginForm.password == '123456'){
        localStorage.setItem('currentUser', JSON.stringify({uid:123, fullName: 'Admin'}));
        if(this.returnUrl == '/') this.returnUrl = '/quantrivien';
        _this.router.navigate([this.returnUrl]);
      } else {
        this.utilsService.showNotification('top', 'right', 'Sai thông tin đăng nhập!', 4);
      }

      // this.authenticationService.login(loginForm.username, loginForm.password).subscribe(
      //   data => {
      //     _this.response = data;
      //     if (data.status == 0) {
      //       _this.router.navigate([this.returnUrl]);
      //     } else {
      //     }
      //   },
      //   () => {
      //     this.utilsService.showNotification('top', 'right', 'Đăng nhập thất bại', 4);
      //   }
      // );
    }
  }
  openLoginForm(typeUserLoginName: string){
    this.typeUserLoginName = typeUserLoginName;
    this.formLoginOpened = true;
  }
  blurPassword(){
    document.getElementById('password').blur();
  }


}
