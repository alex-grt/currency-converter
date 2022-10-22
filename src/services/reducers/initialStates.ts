import {
  IStateBaseCurrency,
  IStateData,
  IStatePreloader,
  IStateTheme
} from './types';

const initialData: IStateData = {
  data: {},
  dataRequest: false,
  dataFailed: false
};

const initialPreloader: IStatePreloader = {
  open: false
};

const initialTheme: IStateTheme = {
  lightTheme: false
};

const initialBaseCurrency: IStateBaseCurrency = {
  baseCurrency: ''
};

export {
  initialData,
  initialPreloader,
  initialTheme,
  initialBaseCurrency
};
