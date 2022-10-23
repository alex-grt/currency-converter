import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ENABLE_PRELOADER,
  DISABLE_PRELOADER,
  SET_THEME,
  TOGGLE_THEME,
  SET_RUB,
  SET_USD
} from '.';
import { IData } from '../../utils/types';

export interface IGetDataRequestAction {
  readonly type: typeof GET_DATA_REQUEST;
}

export interface IGetDataSuccessAction {
  readonly type: typeof GET_DATA_SUCCESS;
  data: IData[];
}

export interface IGetDataFailedAction {
  readonly type: typeof GET_DATA_FAILED;
}

export interface IEnablePreloaderAction {
  readonly type: typeof ENABLE_PRELOADER;
}

export interface IDisablePreloaderAction {
  readonly type: typeof DISABLE_PRELOADER;
}

export interface ISetThemeAction {
  readonly type: typeof SET_THEME;
  payload: boolean;
}

export interface IToggleThemeAction {
  readonly type: typeof TOGGLE_THEME;
}

export interface ISetRUBAction {
  readonly type: typeof SET_RUB;
}

export interface ISetUSDAction {
  readonly type: typeof SET_USD;
}

export type TActions =
  | IGetDataRequestAction
  | IGetDataSuccessAction
  | IGetDataFailedAction
  | IEnablePreloaderAction
  | IDisablePreloaderAction
  | ISetThemeAction
  | IToggleThemeAction
  | ISetRUBAction
  | ISetUSDAction;
