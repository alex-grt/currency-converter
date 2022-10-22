import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { store } from '..';
import { TActions } from '../services/actions/types';

export type TStore = ReturnType<typeof store.getState>;

export type TDispatch = ThunkDispatch<TStore, never, TActions>;

export type TThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TStore,
  never,
  TActions
>;

export interface ICurrencyData {
  readonly ID: string;
  readonly NumCode: string;
  readonly CharCode: string;
  readonly Nominal: number;
  readonly Name: string;
  readonly Value: number;
  readonly Previous: number;
}

export interface ICurrencies {
  readonly [name: string]: ICurrencyData;
}

export interface IData {
  readonly Date?: string;
  readonly PreviousDate?: string;
  readonly PreviousURL?: string;
  readonly Timestamp?: string;
  readonly Valute?: ICurrencies;
}

export interface IFlag {
  readonly [name: string]: string;
}
