import { action } from "typesafe-actions";
import { FlatsActionTypes, FlatModel } from "./types";

export const fetchRequest = () => action(FlatsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: FlatModel[]) =>
  action(FlatsActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(FlatsActionTypes.FETCH_ERROR, message);
