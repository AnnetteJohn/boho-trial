import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User;
  constructor(private productServi :ProductServices,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; lastname: string,email: string; password: string,address: string; })
  {

    console.log(postData);

    this.http
      .post(
        'http://localhost:3005/api/signup',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
        alert("user created");
      });

  }

}