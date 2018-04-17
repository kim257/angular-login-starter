import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  public canActivate() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return true;
      // return false;
    } else {
      return true;
    }
  }
}
