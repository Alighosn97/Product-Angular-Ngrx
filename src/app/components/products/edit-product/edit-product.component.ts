import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {EditProductsAction, UpdateProductsAction} from "../../../ngrx/products.action";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productID:number;
  submitted : boolean = false;
  readonly ProductsStateEnum = ProductsStateEnum;
formBuilt : boolean = false;
  state : ProductsState|null=null;
  productFormGroup:FormGroup|null=null;
  constructor(private fb : FormBuilder , private activatedRoute:ActivatedRoute,private store : Store<any>,
              private router : Router) {
    this.productID=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductsAction(this.productID));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if (this.state?.dataState==ProductsStateEnum.LOADED){
        if(this.state.currentProduct!=null){
          this.productFormGroup = this.fb.group({

            id :  [this.state.currentProduct.id],
            name: [this.state.currentProduct.name,Validators.required],
            price: [this.state.currentProduct.price,Validators.required],
            quantity: [this.state.currentProduct.quantity,Validators.required],
            selected: [this.state.currentProduct.selected,Validators.required],
            available: [this.state.currentProduct.available,Validators.required]
          });
          this.formBuilt=true;
        }
      }

    })
  }

  okUpdated() {
  this.router.navigateByUrl("/products");
  }

  onUpdateProduct() {
this.submitted=true;
if (this.productFormGroup?.invalid)return;
this.store.dispatch(new UpdateProductsAction(this.productFormGroup?.value));
  }
}
