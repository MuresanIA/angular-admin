import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductsViewComponent } from './products/products-view/products-view.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsViewComponent,
    ProductsEditComponent,
    ProductCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
