import { action } from "typesafe-actions";
import { FlatsActionTypes, IFlat } from "./types";

export const fetchRequest = () => action(FlatsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: IFlat[]) =>
  action(FlatsActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(FlatsActionTypes.FETCH_ERROR, message);
