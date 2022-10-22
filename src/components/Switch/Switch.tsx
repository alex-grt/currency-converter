import './Switch.css';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SET_RUB, SET_USD } from '../../services/actions';

const Switch: FC = () => {
  const dispatch = useAppDispatch();
  const { baseCurrency } = useAppSelector(store => store.baseCurrency);

  function setRUB() {
    dispatch({ type: SET_RUB });
  };

  function setUSD() {
    dispatch({ type: SET_USD });
  };

  return (
    <div className="switch">
      <p className="switch__title">Валюта расчётов:</p>
      <div className="switch__cover">
        <label className="switch__label" htmlFor="rub">RUB</label>
        <input
          className="switch__radio"
          type="radio"
          name="currency"
          id="rub"
          onChange={setRUB}
          checked={baseCurrency === 'RUB' ? true : false}
        />
      </div>
      <div className="switch__cover">
        <label className="switch__label" htmlFor="usd">USD</label>
        <input
          className="switch__radio"
          type="radio"
          name="currency"
          id="usd"
          onChange={setUSD}
          checked={baseCurrency === 'USD' ? true : false}
        />
      </div>
    </div>
  );
}

export default Switch;
