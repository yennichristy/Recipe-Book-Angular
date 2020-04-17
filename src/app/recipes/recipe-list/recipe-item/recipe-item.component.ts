import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  //use decorator input to bind data from outside(recipe-list component)
  @Input() recipe: Recipe;
  //add emmiter so the click event can be emit. decorator output so that it can be listen from outside of the componenent (recipe-list-component)
  // **@Output() recipeSelected = new EventEmitter<void>();

  //inject the service so that we can use the metode
  constructor(private recipeService: RecipeService) {}

  //the method to use for click event
  onSelected() {
    // **this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
