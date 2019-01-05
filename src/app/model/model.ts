export class Product{
    constructor(public _id:String,public name:String,public price:number){
        
    }
}
export class Cart{
    constructor(public _id:String,public product:String,public price:number){
        
    }
}