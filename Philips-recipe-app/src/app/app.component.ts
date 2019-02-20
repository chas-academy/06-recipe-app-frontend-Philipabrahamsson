import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Philips-recipe-app';
  search: string;

  constructor(private recipeService: RecipeService) {}

  public searchRecipes(): void {
    this.recipeService.getRecipes(this.search);
  }
}
