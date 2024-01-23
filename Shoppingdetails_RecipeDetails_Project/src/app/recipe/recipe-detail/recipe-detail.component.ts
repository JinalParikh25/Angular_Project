import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
    @Input() recipeDetail : Recipe; 
    isDropDownOppend = false;

    constructor(private shoppingListService : ShoppingListService){}

    onShoppingListClicked(){
      this.shoppingListService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
    }
    
}
