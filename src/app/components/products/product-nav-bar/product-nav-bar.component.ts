import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetSelectedProductsAction,
  ProductsActionsType,
  SearchProductsAction
} from "../../../ngrx/products.action";
import {Router} from "@angular/router";
import {ProductsState} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {
 state : ProductsState |null=null;
 readonly ProductsActions = ProductsActionsType;
  constructor(private store : Store<any>,private router :Router) { }

  ngOnInit(): void {
this.store.subscribe(state=>{
  this.state=state.catalogState;
})
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}));
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword))
  }

  onNewProducts() {
this.router.navigateByUrl("/newProduct");
  }
}
