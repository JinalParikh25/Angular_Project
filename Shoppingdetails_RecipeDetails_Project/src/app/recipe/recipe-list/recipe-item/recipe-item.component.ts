import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
   @Input() recipe: Recipe; 
   @Output() recipeItems = new EventEmitter<void>();

   onRecipeItemClicked(){
      this.recipeItems.emit();
  }
}
