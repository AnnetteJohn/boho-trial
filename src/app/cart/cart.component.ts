import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartServices } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order.model';
import {OrderServices} from '../order.service';
import { from } from 'rxjs';
import { NewOrderServices } from '../neworder.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartSer:CartServices,private http:HttpClient,private newOrde:NewOrderServices) { }

  cart : Cart[] ;
  order : Order[];

  final_total :number =0;
  ngOnInit(): void {

   //console.log( this.cartSer.getcart());
    this.cart = this.cartSer.getcart();

    for(let i of this.cart)
    {
      this.final_total = this.final_total + i.product_total;
    }

  }
  deleteCart(index:number)
  {
    this.cartSer.deleteCart(index);
    this.cart = this.cartSer.getcart();
  }

  

  placeOrder2()
  {
    
    for(let i of this.cart)
    {
    const items =   new Order(i.product_id,i.product_name,i.product_count,i.product_price);
      this.newOrde.addToOrder(items);
    }
  
     let products2:Order[];

    products2 = this.newOrde.getOrder();
  let  amount = this.final_total;
  let  address = "pune";
  // let   user = "5ec4fa436fa97730352c36af";
  var temp = sessionStorage.getItem("userID");
  console.log(temp);
  let   user = temp;


  let postData = 
  {
    products : products2,
    amount : amount,
    address :address,
    user : user


  }
    // console.log(products2);

    // console.log(postData);

    this.http.post('http://localhost:3005/api/order/create',postData).subscribe(responseData => {
        console.log(responseData);
        
        
        this.newOrde.deleteOrder();

        alert("Order is created !!!!");
      });

  }

}