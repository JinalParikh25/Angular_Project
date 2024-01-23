import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    private recipes : Recipe[] = [
        new Recipe(
                    'A Test Recipe',
                    'This is simply Test',
                    'https://plus.unsplash.com/premium_photo-1664648184178-c9d4866c56f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    [
                        new Ingredient('Meat',1),
                        new Ingredient('French Fries',20)
                    ]),
        new Recipe( 
                    'Second Test Recipe',
                    'This is simply Second Test',
                    'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    [
                        new Ingredient('Buns',1),
                        new Ingredient('Meat',2)
                    ])
      ]

    getRecipe(){
        return this.recipes;
    }

    selectedRecipe = new EventEmitter<Recipe>();
    
}