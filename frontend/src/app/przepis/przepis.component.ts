import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-przepis',
  templateUrl: './przepis.component.html',
  styleUrls: ['./przepis.component.css']
})
export class PrzepisComponent implements OnInit {

  recipe: any = {
    name: '',
    ingredients: [],
    description: ''
  };

  constructor(private _router: Router, private _route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipe(this._route.snapshot.params.id)
      .subscribe(data => {
        this.recipe = data;
      });
  }

  cofnij() {
    this._router.navigate(['/user']);
  }

}
