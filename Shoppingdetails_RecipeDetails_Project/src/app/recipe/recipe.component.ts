import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  providers: [RecipeService]
})

export class RecipeComponent implements OnInit {
  selectedRecipeItem : Recipe;

  constructor(private recipeService : RecipeService){
  }

  ngOnInit(){
    this.recipeService.selectedRecipe.subscribe((recipe : Recipe) => {
        this.selectedRecipeItem = recipe;
    });
  }
}
