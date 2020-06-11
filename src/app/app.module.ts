import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.model';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { ProductServices } from './product.service';
import { CartComponent } from './cart/cart.component';
import { FootComponent } from './foot/foot.component';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    MainScreenComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    FootComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductServices, CartServices, NewOrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
