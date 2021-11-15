import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsType{
  /* Get All Product*/
  GET_ALL_PRODUCTS="[Products] get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] get All products success",
  GET_ALL_PRODUCTS_ERROR="[Products] get All products error",
 /* Get Selected Product*/
  GET_SELECTED_PRODUCTS="[Products] get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] get Selected products success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] get Selected products error",
/*Search Product*/
SEARCH_PRODUCTS="[Products] SEARCH products",
  SEARCH_PRODUCTS_SUCCESS="[Products] SEARCH products success",
  SEARCH_PRODUCTS_ERROR="[Products] SEARCH products error"
  ,
  /* Select Product*/
  SELECT_PRODUCTS="[Products] Select products",
  SELECT_PRODUCTS_SUCCESS="[Products] Select product success",
  SELECT_PRODUCTS_ERROR="[Products] Select products error",
  /* delete Product*/
  DELETE_PRODUCTS="[Products] delete products",
  DELETE_PRODUCTS_SUCCESS="[Products] delete product success",
  DELETE_PRODUCTS_ERROR="[Products] delete products error",
  /* New Product*/
    NEW_PRODUCTS="[Products] New products",
  NEW_PRODUCTS_SUCCESS="[Products] New product success",
  NEW_PRODUCTS_ERROR="[Products] New products error",
  /* save Product*/
  SAVE_PRODUCTS="[Products] save products",
  SAVE_PRODUCTS_SUCCESS="[Products] save product success",
  SAVE_PRODUCTS_ERROR="[Products] save products error",
  /* edit Product*/
 EDIT_PRODUCTS="[Products] EDIT products",
  EDIT_PRODUCTS_SUCCESS="[Products] EDIT product success",
  EDIT_PRODUCTS_ERROR="[Products] EDIT products error",
  /* update Product*/
  UPDATE_PRODUCTS="[Products] UPDATE products",
  UPDATE_PRODUCTS_SUCCESS="[Products] UPDATE product success",
  UPDATE_PRODUCTS_ERROR="[Products] UPDATE products error",


}
/*Get All Products Action*/
export class GetAllProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS;
  constructor(public payload : any) {
  }
}
export class GetAllProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload : Product[]) {
  }
}
export class GetAllProductsError implements Action{
  type : ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}


/*Get Selected Products Action*/
export class GetSelectedProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS;
  constructor(public payload : any) {
  }
}
export class GetSelectedProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload : Product[]) {
  }
}
export class GetSelectedProductsError implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}
/* Search product*/
export class SearchProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.SEARCH_PRODUCTS;
  constructor(public payload : string) {
  }
}
export class SearchProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload : Product[]) {
  }
}
export class SearchProductsError implements Action{
  type : ProductsActionsType = ProductsActionsType.SEARCH_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}
/*Selected Products Action*/
export class SelectProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.SELECT_PRODUCTS;
  constructor(public payload : Product) {
  }
}
export class SelectProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.SELECT_PRODUCTS_SUCCESS;
  constructor(public payload : Product) {
  }
}
export class SelectProductsError implements Action {
  type: ProductsActionsType = ProductsActionsType.SELECT_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}
/*Delete Products Action*/
export class DeleteProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.DELETE_PRODUCTS;
  constructor(public payload : Product) {
  }
}
export class DeleteProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.DELETE_PRODUCTS_SUCCESS;
  constructor(public payload : Product) {
  }
}
export class DeleteProductsError implements Action{
  type : ProductsActionsType = ProductsActionsType.DELETE_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}
/* New Products Action*/
export class NewProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.NEW_PRODUCTS;
  constructor(public payload : any) {
  }
}
export class NewProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.NEW_PRODUCTS_SUCCESS;
  constructor(public payload : any) {
  }
}
export class NewProductsError implements Action{
  type : ProductsActionsType = ProductsActionsType.NEW_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}
/* SAVE Products Action*/
export class SaveProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.SAVE_PRODUCTS;
  constructor(public payload : Product) {
  }
}
export class SaveProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.SAVE_PRODUCTS_SUCCESS;
  constructor(public payload : Product) {
  }
}
export class SaveProductsError implements Action{
  type : ProductsActionsType = ProductsActionsType.SAVE_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}
/* Edit Products Action*/
export class EditProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.EDIT_PRODUCTS;
  constructor(public payload : number) {
  }
}
export class EditProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.EDIT_PRODUCTS_SUCCESS;
  constructor(public payload : Product) {
  }
}
export class EditProductsError implements Action{
  type : ProductsActionsType = ProductsActionsType.EDIT_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}
/*UPDATE Products Action*/
export class UpdateProductsAction implements Action{
  type : ProductsActionsType = ProductsActionsType.UPDATE_PRODUCTS;
  constructor(public payload : any) {
  }
}
export class UpdateProductsSuccess implements Action{
  type : ProductsActionsType = ProductsActionsType.UPDATE_PRODUCTS_SUCCESS;
  constructor(public payload : Product) {
  }
}
export class UpdateProductsError implements Action{
  type : ProductsActionsType = ProductsActionsType.UPDATE_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}


export type ProductsActions =
  GetAllProductsAction| GetAllProductsSuccess |GetAllProductsError|
  GetSelectedProductsAction|GetSelectedProductsSuccess|GetSelectedProductsError|
  SearchProductsAction|SearchProductsSuccess|SearchProductsError|
  SelectProductsAction|SelectProductsSuccess|SelectProductsError|
  DeleteProductsAction|DeleteProductsSuccess|DeleteProductsError|
  NewProductsAction|NewProductsSuccess|NewProductsError|
  SaveProductsAction|SaveProductsSuccess|SaveProductsError
  |EditProductsAction|EditProductsSuccess|EditProductsError|
  UpdateProductsAction|UpdateProductsSuccess|UpdateProductsError
  ;
