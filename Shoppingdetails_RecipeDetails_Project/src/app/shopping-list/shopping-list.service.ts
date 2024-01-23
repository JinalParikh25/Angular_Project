import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();

     ingredients : Ingredient[] = [ 
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ]
    
    getIngredients(){
        return this.ingredients.slice(); // create copy of array
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    
    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}