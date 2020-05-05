import { Component, OnInit } from '@angular/core';
import { IProduit } from './produit';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:IProduit;
  pageTitle:string='Product detail';
  private _id:number;
  errorMessage = '';
  starRating= 0;

  constructor(private _routeRecuperation :ActivatedRoute,private _router:Router,
    private _productService:ProductService ) {
    //console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
  this._routeRecuperation.paramMap.subscribe(params=>{
    this._id=+params.get('id');
    this.getProduct(this._id) ;
   });
  }
    

  
  onBack():void{
    this._router.navigate(['/listComponent']);
  }
  onNext() :void{
    if(this._id<5){
      this._id+=1;
    this._router.navigate(['/listComponent',this._id]);
    }else {
      this._id=0;
    }
    
  }
  
  getProduct(_id:number):void{
    this._productService.getProductById(_id).subscribe({
      next:p=>this.product=p,
      error:err=>this.errorMessage=err
    })
  }
 

}
