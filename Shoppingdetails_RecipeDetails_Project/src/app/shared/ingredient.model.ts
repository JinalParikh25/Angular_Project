/*here it is the typescript shortcut that do same thing like 
 public name: string,
 public amount : number

    export class Ingredient{
    constructor(name: string,amount: number){
        this.name = name;
        this.amount = amount;
    }
}
*/

export class Ingredient{
    constructor(public name: string,public amount: number){
    }
}