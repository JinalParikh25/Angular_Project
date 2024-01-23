import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
    @ViewChild('nameInput') nameInput : ElementRef; 
    @ViewChild('amountInput') amountInput : ElementRef; 
    // @Output() ingredientItemAdded = new EventEmitter<Ingredient>();
    objIngredient :Ingredient;

    constructor(private shoppingListService : ShoppingListService){}
    
    onAddedItem(){
        this.objIngredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value) ;
        this.shoppingListService.addIngredient(this.objIngredient);
       // this.shoppingListService.IngredientAdded.emit(this.objIngredient);
        //this.ingredientItemAdded.emit(this.objIngredient);
    }
}
