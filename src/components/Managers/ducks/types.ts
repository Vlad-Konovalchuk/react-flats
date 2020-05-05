export enum ManagersActionTypes {
    FETCH_REQUEST = "@@managers/FETCH_REQUEST",
    FETCH_SUCCESS = "@@managers/FETCH_SUCCESS",
    FETCH_ERROR = "@@managers/FETCH_ERROR",
    SELECTED = "@@managers/SELECTED",
}

export interface IManager {
    name: string;
    company: string;
}

export interface IMangersState {
    readonly loading: boolean;
    readonly data: IManager[] ;
    readonly errors?: Error;
}
