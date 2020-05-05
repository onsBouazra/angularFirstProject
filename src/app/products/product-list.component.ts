import { Component, OnInit } from '@angular/core';
import { IProduit} from './produit'
import { ProductService } from './product.service';
@Component({
selector:'app-products',
templateUrl:'./product-list.component.html',
styleUrls:['./product-listFirst.component.scss','./product-listSecond.component.scss']
})
export class ProductListComponent implements OnInit{
 
    title: string='Product List';
    imageWidh=50;
    imageHeight=30;
    imageMargin=2;
    click=false;
    message:string='';
    filtredListProduct:IProduit[];

    products:IProduit[]=[];

    _listFilter:string;
    get listFilter(): string{return this._listFilter;}
    set listFilter(value:string){this._listFilter=value;
    this.filtredListProduct=this.listFilter ? this.performFilter(this.listFilter):this.products;
    }

      constructor(private productService:ProductService){
     
      }
      performFilter(filterdBy:string):IProduit[]{

        filterdBy=filterdBy.toLocaleLowerCase();
        return this.products.filter((produit:IProduit) =>
                                    produit.productName.toLocaleLowerCase().indexOf(filterdBy) !== -1);
      
      }

      onClickBtn():void{
        this.click= !this.click;
          }
          btnText(){
            if (this.click===false)return 'Hide Image';
            else return 'show Image';
          }
          ngOnInit(): void {
           console.log('on init method');
           //this.products=this.productService.getProducts();
              this.productService.getProducts().subscribe({
                next: products=>{this.products=products;
                  this.filtredListProduct=this.products;},
                error:err=>this.message=err
              });
           
           

          }


          
          onRaitingClicked(message:string):void{
            this.title=this.title+message;
          }
}