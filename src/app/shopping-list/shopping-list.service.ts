import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  //a method that can be call in recipe service
  addIng(ingredients: Ingredient[]) {
    //alternative1: too much action needed
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient)
    // }

    //get the ingredients with spread operator to combine with the exist ing with the new ones
    this.ingredients.push(...ingredients);
    //emit the change of the ingredients
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
