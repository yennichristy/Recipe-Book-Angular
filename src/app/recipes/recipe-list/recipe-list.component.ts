import { Component, EventEmitter, Output, OnInit } from '@angular/core';

//call the model that we want to use
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  //decorator so that can be use by ythe recipes components
  //**get command because not being use anymore since the service occur
  // **@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  //inject the service we want to use
  constructor(private recipeService: RecipeService) {}

  //get the value at ngOnInit because it is lifecycle that get call when the component is initialize
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  //**get command because not being use anymore since the service occur
  // **onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
