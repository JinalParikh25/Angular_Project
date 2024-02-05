import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe/recipe.service";
import { Recipe } from "../recipe/recipe-list/recipe.model";

@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http:HttpClient, private recipeService: RecipeService){}

    storeRecipe(){
       const recipes = this.recipeService.getRecipe();
       return this.http.put('https://ng-course-recipe-book-57a6a-default-rtdb.firebaseio.com/posts.json',
       recipes).subscribe((response) => {
                            console.log(response);
                        });
    }

    fetchRecipe(){
        this.http.get<Recipe[]>('https://ng-course-recipe-book-57a6a-default-rtdb.firebaseio.com/posts.json')
        .subscribe((response) => {
            this.recipeService.setRecipe(response)
        });
    }
}