import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
    recipes : Recipe[];

    constructor(private recipeServices : RecipeService,
                private activeRoute: ActivatedRoute,
                private router : Router){
      
    }

    ngOnInit(){
      this.recipes = this.recipeServices.getRecipe();
    }

    onNewRecipe(){
      this.router.navigate(['new'], {relativeTo : this.activeRoute})
    }
}
