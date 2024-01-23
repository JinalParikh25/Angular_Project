import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";
import { Event } from "@angular/router";

@Directive({
    selector : '[appDropdown]'
})
export class DropdownDirective{
   // isOpen = false;
    @HostBinding('class.open') isOpen = false;


    @HostListener('click') toggleOpen(eventData : Event){
        this.isOpen = !this.isOpen;
    }
}