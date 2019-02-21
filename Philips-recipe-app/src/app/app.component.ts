import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Philips-recipe-app';
  search: any;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  public searchRecipes(): void {
    this.recipeService.getRecipes(this.search)
      .subscribe(res => {
        this.recipes = res.hits.map((hit: any) => (hit.recipe))
        console.log(this.recipes)
      });
  }
}
