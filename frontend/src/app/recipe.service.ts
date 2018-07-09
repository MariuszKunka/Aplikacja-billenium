import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _http: HttpClient) { }

  addRecipe(name: string, ingredients: string[], description: string) {
    return this._http.post('http://127.0.0.1:3000/recipe/add',
    {
      name: name,
      ingredients: ingredients,
      description: description
    },
    {
      observe: 'body',
      headers: new HttpHeaders().append('Content-type', 'application/json')
    });
  }

  getRecipe(id: number) {
    return this._http.get('http://127.0.0.1:3000/recipe/get',
    {
      observe: 'body',
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      params: new HttpParams().set('id', id.toString())
    });
  }

  getRandomRecipes() {
    return this._http.get('http://127.0.0.1:3000/recipe/getrandom',
    {
      observe: 'body',
      headers: new HttpHeaders().append('Content-type', 'application/json')
    });
  }

  getByIngredients(ingredients: string) {
    return this._http.get('http://127.0.0.1:3000/recipe/search',
    {
      observe: 'body',
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      params: new HttpParams().set('ingredients', ingredients)
    });
  }
}
