import { Component, 
         ElementRef, 
         EventEmitter, 
         Output, 
         ViewChild } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    @ViewChild('recipesElement', {static: true}) recipesElement: ElementRef;
    @ViewChild('shoppingListElement', {static: true}) shoppingListElement: ElementRef;
 
    @Output() changeToRecipeCompoent = new EventEmitter<InnerHTML>();

    onRecipeslinkClicked(){
        // console.log(this.recipesElement.nativeElement.innerHTML);
          this.changeToRecipeCompoent.emit(this.recipesElement.nativeElement.innerHTML);
    }

    onShoppingListlinkClicked(){
         console.log(this.shoppingListElement.nativeElement.innerHTML);
          this.changeToRecipeCompoent.emit(this.shoppingListElement.nativeElement.innerHTML);
    }
}