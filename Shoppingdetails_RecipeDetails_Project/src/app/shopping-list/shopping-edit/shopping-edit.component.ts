import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
    subscription : Subscription;
    @ViewChild('shoppingForm') shoppingForm : NgForm;
    editMode = false;
    editedItemIndex : number;
    editItem : Ingredient; 

    objIngredient :Ingredient;

    constructor(private shoppingListService : ShoppingListService){}
 
    ngOnInit() {
      this.subscription =   this.shoppingListService.startedEditing
      .subscribe((index:number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(this.editedItemIndex);
        this.shoppingForm.setValue({
          name : this.editItem.name,
          number : this.editItem.amount 
        }
        )
      });
    }
    
    onSubmitItem(){
      console.log(this.shoppingForm.value.name);
       this.objIngredient = new Ingredient(this.shoppingForm.value.name,this.shoppingForm.value.number) ;
       if(this.editMode == true){
        this.shoppingListService.updateIngredient(this.editedItemIndex,this.objIngredient);
       }else{
        this.shoppingListService.addIngredient(this.objIngredient);
       }
       this.editMode= false;
       this.shoppingForm.reset();
       
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

    onClear(){
      this.shoppingForm.reset();
      this.editMode = false;
    }

    onDelete(){
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.onClear();
    }
}
