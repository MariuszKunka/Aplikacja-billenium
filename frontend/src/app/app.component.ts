import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _router: Router, public _user: UserService) { }

  logout() {
    this._user.logout()
    .subscribe(
      data => {console.log(data); this._router.navigate(['/login']); this._user.isLogged = false; },
      error => console.error(error)
    );
  }
}
