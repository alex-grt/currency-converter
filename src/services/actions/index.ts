import { executeGet } from '../../utils/api';
import { BASE_URL } from '../../utils/constants';
import { TThunk } from '../../utils/types';

export const GET_DATA_REQUEST: 'GET_DATA_REQUEST' = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS: 'GET_DATA_SUCCESS' = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED: 'GET_DATA_FAILED' = 'GET_DATA_FAILED';

export const ENABLE_PRELOADER: 'ENABLE_PRELOADER' = 'ENABLE_PRELOADER';
export const DISABLE_PRELOADER: 'DISABLE_PRELOADER' = 'DISABLE_PRELOADER';

export const TOGGLE_THEME: 'TOGGLE_THEME' = 'TOGGLE_THEME';

export const SET_RUB: 'SET_RUB' = 'SET_RUB';
export const SET_USD: 'SET_USD' = 'SET_USD';

export function getData(): TThunk {
  return function(dispatch) {
    dispatch({ type: ENABLE_PRELOADER });
    dispatch({ type: GET_DATA_REQUEST });
    executeGet(BASE_URL)
      .then(res => {
        if (res) {
          dispatch({
            type: GET_DATA_SUCCESS,
            data: res
          });
        } else {
          dispatch({ type: GET_DATA_FAILED });
        }
      })
      .catch(err => {
        alert(`Ошибка: ${err}`);
        dispatch({ type: GET_DATA_FAILED });
      })
      .finally(() => dispatch({ type: DISABLE_PRELOADER }));
  }
};
