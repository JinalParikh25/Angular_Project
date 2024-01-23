import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})

export class RecipeItemComponent {
   @Input() recipe: Recipe; 

   constructor(private recipeServices : RecipeService){}

   onRecipeItemClicked(){
        this.recipeServices.selectedRecipe.emit(this.recipe);
      // this.recipeItems.emit();
  }
}
