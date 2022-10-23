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
      <label className="switch__label">
        RUB
        <input
          className="switch__radio"
          type="radio"
          name="currency"
          id="rub"
          onChange={setRUB}
          checked={baseCurrency === 'RUB' ? true : false}
        />
        <span className="switch__pseudoradio" />
      </label>
      <label className="switch__label">
        USD
        <input
          className="switch__radio"
          type="radio"
          name="currency"
          id="usd"
          onChange={setUSD}
          checked={baseCurrency === 'USD' ? true : false}
        />
        <span className="switch__pseudoradio" />
      </label>
    </div>
  );
}

export default Switch;
