import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //inject the recipe service which in parent component and will share the same instance of the service for all the children components
  providers: [RecipeService],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  //inject the service
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    //set up the listener and subscribe to get inform for any change
    //(recipe: Recipe) -> argument
    //{this.selectedRecipe = recipe} -> function body
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
