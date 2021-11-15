import {Product} from "../model/product.model";
import {ProductsActions, ProductsActionsType} from "./products.action";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial",
  NEW = "New",
  EDIT = "Edit",
  UPDATED = "Updated"
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct: Product | null,
  currentAction : ProductsActions|null
}

const initState: ProductsState = {
  products: [],
  errorMessage: "",
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction:null
}

export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
  switch (action.type) {
    /*Get All Product*/
    case ProductsActionsType.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_ALL_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*Get Selected Product*/
    case ProductsActionsType.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*Search Product*/
    case ProductsActionsType.SEARCH_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.SEARCH_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*Select Product*/
    case ProductsActionsType.SELECT_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.SELECT_PRODUCTS_SUCCESS:
      let product: Product = (<ProductsActions>action).payload;
      let listProduct = [...state.products];
      let data: Product [] = listProduct.map(p => p.id == product.id ? product : p);
      return {...state, dataState: ProductsStateEnum.LOADED, products: data,currentAction:<ProductsActions>action}
    case ProductsActionsType.SELECT_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*Select Product*/
    case ProductsActionsType.DELETE_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.DELETE_PRODUCTS_SUCCESS:
      let p: Product = (<ProductsActions>action).payload;
      let productList = [...state.products];
      let index = state.products.indexOf(p);
      productList.splice(index, 1);
      return {...state, dataState: ProductsStateEnum.LOADED, products: productList,currentAction:<ProductsActions>action}
    case ProductsActionsType.DELETE_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*New Product*/
    case ProductsActionsType.NEW_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.NEW_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW,currentAction:<ProductsActions>action}
    case ProductsActionsType.NEW_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*SAVE Product*/
    case ProductsActionsType.SAVE_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.SAVE_PRODUCTS_SUCCESS:
      let prods: Product[] = [...state.products];
      prods.push((<ProductsActions>action).payload)
      return {...state, dataState: ProductsStateEnum.LOADED, products: prods,currentAction:<ProductsActions>action}
    case ProductsActionsType.SAVE_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*EDIT  Product*/
    case ProductsActionsType.EDIT_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.EDIT_PRODUCTS_SUCCESS:

      return {...state, dataState: ProductsStateEnum.LOADED, currentProduct: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsType.SAVE_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    /*update  Product*/
    case ProductsActionsType.UPDATE_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsType.UPDATE_PRODUCTS_SUCCESS:
      let updateProduct: Product = (<ProductsActions>action).payload;
      let productsList = state.products.map(p => (p.id == updateProduct.id) ? updateProduct : p);
      return {...state, dataState: ProductsStateEnum.UPDATED, products: productsList,currentAction:<ProductsActions>action}
    case ProductsActionsType.UPDATE_PRODUCTS_ERROR :
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload,currentAction:<ProductsActions>action}

    default :
      return {...state}
  }
}

