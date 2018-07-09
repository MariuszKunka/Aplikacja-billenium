import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-wyszukaj',
  templateUrl: './wyszukaj.component.html',
  styleUrls: ['./wyszukaj.component.css']
})
export class WyszukajComponent implements OnInit {

  query = '';

  recipes = [];

  constructor(private _router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  cofnij() {
    this._router.navigate(['/user']);
  }

  search() {
    console.log(this.query);
    this.recipeService.getByIngredients(this.query)
      .subscribe(
        data => this.recipes = <any> data,
        error => console.log(error)
      );
  }

  showRecipe(id) {
    this._router.navigate(['/przepis', {id: id}]);
  }

}
