import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    providers:[DataStorageService]
})
export class HeaderComponent{

 constructor(private dataStoredService:DataStorageService){}


    onSaveData(){
     this.dataStoredService.storeRecipe();
    }

    onFetchData(){
        this.dataStoredService.fetchRecipe();
    }
}