import { Component, OnInit } from '@angular/core';
import { IProduit} from './produit'
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

    _listFilter:string;
    get listFilter(): string{return this._listFilter;}
    set listFilter(value:string){this._listFilter=value;
    this.filtredListProduct=this.listFilter ? this.performFilter(this.listFilter):this.products;
    }

    filtredListProduct:IProduit[];

    products:IProduit[]=[
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png",
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ];
      constructor(){
        this.filtredListProduct=this.products;
        this.listFilter='cart';
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
           console.log('on init method')
          }
          onRaitingClicked(message:string):void{
            this.title=this.title+message;
          }
}