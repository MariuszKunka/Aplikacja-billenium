import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  name = '';
  ingredients = '';
  description = '';

  constructor(private _router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  cofnij() {
    this._router.navigate(['/user']);
  }

  addRecipe() {
    const ingredients = this.ingredients.split(',').map(val => val.trim());

    this.recipeService.addRecipe(this.name, ingredients, this.description)
      .subscribe(data => {
        console.log(data);
      });
  }

}
