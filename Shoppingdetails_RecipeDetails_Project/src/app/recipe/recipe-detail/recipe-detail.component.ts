import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipeDetail : Recipe; 
    isDropDownOppend = false;
    constructor(private shoppingListService : ShoppingListService,
                private recipeService : RecipeService,
                private activatedRoute: ActivatedRoute,
                private router:Router){
      
    }

    ngOnInit(){
      this.activatedRoute.params
          .subscribe(
            (params : Params) => {
                this.recipeDetail = this.recipeService.getRecipeById(+params['id']);
            }
          );     
    }

    onShoppingListClicked(){
      this.shoppingListService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
    }
    
    onEditRecipeClicked(){
      this.router.navigate(['edit'], {relativeTo:this.activatedRoute})
    }
}
