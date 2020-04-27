import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpace } from './shared/convert-to-spaces.pipes';
import { StarComponent } from './shared/star.component';


@NgModule({
  declarations: [
    ConvertToSpace,
    ProductListComponent,
    AppComponent,
    StarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
