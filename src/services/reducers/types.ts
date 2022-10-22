import { IData } from '../../utils/types';

export interface IStateData {
  data: IData & object;
  dataRequest: boolean;
  dataFailed: boolean;
}

export interface IStatePreloader {
  open: boolean;
}

export interface IStateTheme {
  lightTheme: boolean;
}

export interface IStateBaseCurrency {
  baseCurrency: string;
}
