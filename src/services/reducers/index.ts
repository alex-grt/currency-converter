import { combineReducers } from 'redux';
import {
  setBaseCurrency,
  setData,
  setPreloader,
  setTheme
} from './reducers';

export const rootReducer = combineReducers({
  data: setData,
  preloader: setPreloader,
  theme: setTheme,
  baseCurrency: setBaseCurrency
});
