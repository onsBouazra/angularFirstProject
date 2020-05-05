import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpace } from './shared/convert-to-spaces.pipes';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './products/welcome.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './products/page-not-found.component';
import { ProductDetailGuard } from './products/product-detail.guard';
@NgModule({
  declarations: [
    ConvertToSpace,
    ProductListComponent,
    AppComponent,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'listComponent',component:ProductListComponent},
      {path:'listComponent/:id',
      canActivate:[ProductDetailGuard],
      component:ProductDetailComponent},         
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
