import { Component } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  selectedRecipeItem : Recipe;

  getSelectedItem(selectedRecipeItem : Recipe){
      this.selectedRecipeItem = selectedRecipeItem;
  }
}
