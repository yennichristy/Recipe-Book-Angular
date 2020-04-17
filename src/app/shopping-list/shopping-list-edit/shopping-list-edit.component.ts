import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  //use decorator ViewChild for to get the value with the local reference from the template
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  //to emit an event and to be listen from outside of the component(shopping-list)
  // **@Output() ingredientAdded = new EventEmitter<Ingredient>();

  //inject the service
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {}

  //method for click event
  onAddItem() {
    //make a variable to be use in the newIngredient to get the value
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    //variable for get new data
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppinglistService.addIngredient(newIngredient);
    // **this.ingredientAdded.emit(newIngredient);
  }
}
