import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})

export class RecipeItemComponent {
   @Input() recipe: Recipe; 
   @Input() index;
  
  //  constructor(private recipeServices : RecipeService,
  //              private route: ActivatedRoute,
  //              private router: Router){
  //              }

  //  onRecipeItemClicked(){
  //   this.recipeServices.selectedRecipe.emit(this.recipe);
  //   this.router.navigate(['index'], {relativeTo: this.route})
        
  //     // this.recipeItems.emit();
  // }
}
