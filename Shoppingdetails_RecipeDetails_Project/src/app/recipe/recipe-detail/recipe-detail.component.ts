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
    id:number;
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
              this.id = +params['id'];
                this.recipeDetail = this.recipeService.getRecipeById(this.id);
            }
          );     
    }

    onShoppingListClicked(){
      this.shoppingListService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
    }
    
    onEditRecipeClicked(){
      this.router.navigate(['edit'], {relativeTo:this.activatedRoute})
    }

    onDeleteRecipeClicked(){
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['../'],{relativeTo:this.activatedRoute });
    }
}
