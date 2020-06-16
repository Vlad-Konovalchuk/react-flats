export enum FlatsActionTypes {
  FETCH_REQUEST = "@@flats/FETCH_REQUEST",
  FETCH_SUCCESS = "@@flats/FETCH_SUCCESS",
  FETCH_ERROR = "@@flats/FETCH_ERROR",
  SELECTED = "@@flats/SELECTED",
}

export interface FlatModel {
  _id:number|string;
  title:string;
  price?:number;
  description:string;
}

export interface IFlatsState {
  readonly loading: boolean;
  readonly data: FlatModel[];
  readonly errors?: string;
}
