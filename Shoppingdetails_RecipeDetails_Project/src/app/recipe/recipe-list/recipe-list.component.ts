import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
    recipes : Recipe[];
    subscription : Subscription;

    constructor(private recipeServices : RecipeService,
                private activeRoute: ActivatedRoute,
                private router : Router){
      
    }

    ngOnInit(){
      this.recipes = this.recipeServices.getRecipe();
      this.subscription = this.recipeServices.recipeChanged.subscribe((recipe: Recipe[])=> {
          this.recipes = recipe;
      });
    }

    onNewRecipe(){
      this.router.navigate(['new'], {relativeTo : this.activeRoute})
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
