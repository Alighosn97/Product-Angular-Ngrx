import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  DeleteProductsAction,
  DeleteProductsError,
  DeleteProductsSuccess, EditProductsError, EditProductsSuccess,
  GetAllProductsError,
  GetAllProductsSuccess,
  GetSelectedProductsError,
  GetSelectedProductsSuccess,
  NewProductsSuccess,
  ProductsActions,
  ProductsActionsType, SaveProductsError,
  SaveProductsSuccess,
  SearchProductsError,
  SearchProductsSuccess,
  SelectProductsError,
  SelectProductsSuccess, UpdateProductsError, UpdateProductsSuccess
} from "./products.action";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects{
  constructor(private productsService:ProductsService,private effectActions:Actions) {

  }
  /*Get All Product*/
  getAllProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.GET_ALL_PRODUCTS),
      mergeMap((action)=>{
                     return this.productsService.getAllProducts()
                      .pipe(
                        map((products)=>new GetAllProductsSuccess(products)),
                        catchError((err =>of( new GetAllProductsError(err)))
                        )
                      )
})

    )
  );
  /*Get Selected Product*/
  getSelectedProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{
        return this.productsService.getSelectedProducts()
          .pipe(
            map((products)=>new GetSelectedProductsSuccess(products)),
            catchError((err =>of( new GetSelectedProductsError(err)))
            )
          )
      })

    )
  );
  /*Search Product Effects*/
  searchProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.SEARCH_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.searchProducts(action.payload)
          .pipe(
            map((products)=>new SearchProductsSuccess(products)),
            catchError((err =>of( new SearchProductsError(err.message)))
            )
          )
      })

    )
  );
  /*Select Product Effects*/
  selectProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.SELECT_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.select(action.payload)
          .pipe(
            map((product)=>new SelectProductsSuccess(product)),
            catchError((err =>of( new SelectProductsError(err.message)))
            )
          )
      })

    )
  );
  /*DELETE Product Effects*/
  deleteProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.DELETE_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.delete(action.payload.id)
          .pipe(
            map((product)=>new DeleteProductsSuccess(action.payload)),
            catchError((err =>of( new DeleteProductsError(err.message)))
            )
          )
      })

    )
  );
  /*New Product Effects*/
  newProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.NEW_PRODUCTS),
      map((action:ProductsActions)=>{
        return new NewProductsSuccess({});

      })

    )
  );
  /*SAVE Product Effects*/
  saveProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.SAVE_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.save(action.payload)
          .pipe(
            map((product)=>new SaveProductsSuccess(product)),
            catchError((err =>of( new SaveProductsError(err.message)))
            )
          )
      })

    )
  );
  /*edit Product Effects*/
 editProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.EDIT_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.getProduct(action.payload)
          .pipe(
            map((product)=>new EditProductsSuccess(product)),
            catchError((err =>of( new EditProductsError(err.message)))
            )
          )
      })

    )
  );
  /*update Product Effects*/
  updateProductsEffect :Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.UPDATE_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.upDatProduct(action.payload)
          .pipe(
            map((product)=>new UpdateProductsSuccess(product)),
            catchError((err =>of( new UpdateProductsError(err.message)))
            )
          )
      })

    )
  );
}
