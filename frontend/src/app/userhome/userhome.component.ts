import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username: String = '';
  recipes: any;

  constructor(private _user: UserService, private _router: Router, private recipeService: RecipeService) {
    this._user.user()
    .subscribe(
      data => this.addName(data),
      error => this._router.navigate(['/login'])
    );

    this.recipeService.getRandomRecipes()
      .subscribe(
        data => this.recipes = data,
        error => console.log(error)
      );
  }

  addName(data) {
    this.username = data.username;
  }

  ngOnInit() {
  }

  logout() {
    this._user.logout()
    .subscribe(
      data => {console.log(data); this._router.navigate(['/login']); },
      error => console.error(error)
    );
  }

  dodaj() {
    this._router.navigate(['/dodaj']);
  }

  szukaj() {
    this._router.navigate(['/wyszukaj']);
  }

  showRecipe(id) {
    this._router.navigate(['/przepis', {id: id}]);
  }

}
