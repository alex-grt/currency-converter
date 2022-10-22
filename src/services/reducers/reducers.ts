import {
  initialBaseCurrency,
  initialData,
  initialPreloader,
  initialTheme
} from './initialStates';
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ENABLE_PRELOADER,
  DISABLE_PRELOADER,
  TOGGLE_THEME,
  SET_RUB,
  SET_USD,
} from '../actions/index';
import { TActions } from '../actions/types';
import {
  IStateBaseCurrency,
  IStateData,
  IStatePreloader,
  IStateTheme
} from './types';

function setData(
  state = initialData,
  action: TActions
): IStateData {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        dataRequest: true
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.data,
        dataRequest: false,
        dataFailed: false
      };
    }
    case GET_DATA_FAILED: {
      return {
        ...state,
        dataRequest: false,
        dataFailed: true
      };
    }
    default: { return state; }
  }
};

function setPreloader(
  state = initialPreloader,
  action: TActions
): IStatePreloader {
  switch (action.type) {
    case ENABLE_PRELOADER: {
      return { open: true };
    }
    case DISABLE_PRELOADER: {
      return { open: false };
    }
    default: { return state; }
  }
};

function setTheme(
  state = initialTheme,
  action: TActions
): IStateTheme {
  switch (action.type) {
    case TOGGLE_THEME: {
      return { lightTheme: !state.lightTheme };
    }
    default: { return state; }
  }
};

function setBaseCurrency(
  state = initialBaseCurrency,
  action: TActions
): IStateBaseCurrency {
  switch (action.type) {
    case SET_RUB: {
      return { baseCurrency: 'RUB' };
    }
    case SET_USD: {
      return { baseCurrency: 'USD' };
    }
    default: { return state; }
  }
};

export {
  setData,
  setPreloader,
  setTheme,
  setBaseCurrency
};
