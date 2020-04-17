//set a service that holding a feature/data (a place where we manage data)
//only add decorator if you want to inject service on service
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

//add injectable decorator to inject service to service (shopping list to recipe)
@Injectable()
export class RecipeService {
  //simplified the cross component communication with moving the emitter from recipe item component to recipe service
  //a property that emit and hold recipe data
  recipeSelected = new EventEmitter<Recipe>();

  //make it private so that it cant be directly access from outside
  private recipes: Recipe[] = [
    new Recipe(
      'Omelet',
      'Delicious',
      'https://i2.wp.com/resepkoki.id/wp-content/uploads/2017/04/Resep-Omelet-mie.jpg?fit=1300%2C1300&ssl=1',
      [new Ingredient('Eggs', 2)]
    ),
    new Recipe(
      'Fried Rice',
      'Yummy',
      'https://cdn02.indozone.id/re/content/2020/01/31/jzsJ1E/t_5e339bc9cc09b.jpg?w=700&q=85',
      [
        new Ingredient('Eggs', 2),
        new Ingredient('Rice', 1),
        new Ingredient('Carrot', 1),
      ]
    ),
    new Recipe(
      'Burger',
      'Yummy',
      'https://www.rukita.co/stories/wp-content/uploads/2020/02/byurger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  //inject the service
  constructor(private shoppinglistService: ShoppingListService) {}

  //method to get access from outside
  getRecipes() {
    //return a copy data from the above array
    return this.recipes.slice();
  }

  addIngredientsToShopList(ingredient: Ingredient[]) {
    this.shoppinglistService.addIng(ingredient);
  }
}
