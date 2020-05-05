import {IManager, ManagersActionTypes, IMangersState} from "./types";

export const managersFetch = () => ({
    type: ManagersActionTypes.FETCH_REQUEST
} as const)

export const managersFetchSuccess = (data: IManager[]) => ({
    type: ManagersActionTypes.FETCH_SUCCESS,
    payload: data
} as const)

export const managersFetchFailed = (error: Error) => ({
    type: ManagersActionTypes.FETCH_ERROR,
    error: error
} as const)


export type ManagersActions =
    ReturnType<typeof managersFetch> | ReturnType<typeof managersFetchSuccess> | ReturnType<typeof managersFetchFailed>
