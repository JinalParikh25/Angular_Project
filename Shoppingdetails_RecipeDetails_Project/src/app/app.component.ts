import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shoppingdetails_RecipeDetails_Project';
  componentName : string = "Recipes";

  showRecipeComponent(linktext:string){
    this.componentName = linktext;
   // console.log(linktext);
  }
}
