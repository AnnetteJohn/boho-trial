import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { throwError, BehaviorSubject } from 'rxjs';
import { Userlogin } from '../userlogin.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //  user = new BehaviorSubject<Userlogin>(null);
  user : any;
  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }
    
    session_set = false;
    username : string;
  ngOnInit() {
    
  }
  
  loginClicked(form:NgForm)
  {
    

    const email = form.value.email;
    const password = form.value.password;

    const login = { email :email,password:password};

    //alert(password);

    this.http.post('http://localhost:3005/api/signin',login).subscribe(responseData => {
      console.log(responseData);
      
    this.user=responseData;
    localStorage.setItem('userData', JSON.stringify(this.user.user)); // option 1
    localStorage.setItem('user_email', this.user.user.email);  // option 2
    localStorage.setItem('user_name', this.user.user.name);  // option 3
    localStorage.setItem('user_id', this.user.user._id);  // opion 4
 
    sessionStorage.setItem('user_name', this.user.user.name);
    sessionStorage.setItem('userID', this.user.user._id);
    console.log(this.user.user.name);


    //   if(this.user.name)
    //  {
    //   this.handleAuthentication(this.user.email,this.user._id,this.user.name);
        // this.session_set = true;
        // this.username = responseData.user.name.toString();
        this.router.navigate(['/main']);

    //   }
     })
    
    form.reset();
  }

  private handleAuthentication(
    email: string,
    userId: string,
    name: string,
  ) 
  {
   
    const user = new Userlogin(email, name, userId);
  

    localStorage.setItem('userData', JSON.stringify(user)); // option 1
    localStorage.setItem('user_email', email);  // option 2
    localStorage.setItem('user_name', name);  // option 3
    localStorage.setItem('user_id', userId);  // otpion 4
 
    sessionStorage.setItem('user_name', name);
  }

}