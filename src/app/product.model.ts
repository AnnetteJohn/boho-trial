import { Category } from './category.model';
import { from } from 'rxjs';
export class Product
{
    public _id? : string;
    public name : string;
    public description : string;
    public productImagePath : string;
    public price : number;
    //public stock : number;
    //public category : string;
    


    constructor(p_name:string, p_desc:string, p_imagePath:string, p_price:number)
    {

        this.name = p_name;
        this.description = p_desc;
        this.productImagePath = p_imagePath;
        this.price = p_price;
       

    }
}

