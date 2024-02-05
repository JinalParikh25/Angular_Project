import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})

export class RecipeComponent {
  // selectedRecipeItem : Recipe[];

  // constructor(private recipeService : RecipeService){
  // }

  // ngOnInit(){
  //   debugger;
  //   this.recipeService.recipeChanged.subscribe((recipe : Recipe[]) => {
  //       this.selectedRecipeItem = recipe;
  //   });
  // }
}
