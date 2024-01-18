import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
    @ViewChild('nameInput') nameInput : ElementRef; 
    @ViewChild('amountInput') amountInput : ElementRef; 
    @Output() ingredientItemAdded = new EventEmitter<Ingredient>();
    objIngredient :Ingredient;

    onAddedItem(){
        // console.log(this.nameInput.nativeElement.value); 
        // console.log(this.amountInput.nativeElement.value); 
        this.objIngredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value) ;

        this.ingredientItemAdded.emit(this.objIngredient);
    }
}
