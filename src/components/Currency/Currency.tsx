import './Currency.css';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { ICurrencyData } from '../../utils/types';
import { DEFAULT_CURRENCY } from '../../utils/constants';
import { listFlags } from '../../utils/listFlags';

interface ICurrencyProps {
  item: ICurrencyData;
}

const Currency: FC<ICurrencyProps> = ({ item }) => {
  const { baseCurrency } = useAppSelector(store => store.baseCurrency);
  const { data } = useAppSelector(store => store.data);
  const { Value: valueDefault, Nominal: nominal, CharCode: charCode } = item;
  const defaultCurrency = baseCurrency === DEFAULT_CURRENCY;
  const valueUSD =
    data.Valute && data.Valute['USD'].Value ? data.Valute['USD'].Value : 0;
  const coin = nominal / nominal;
  const priceDefault =
    ((valueDefault / nominal) % 1) !== 0
      ? (valueDefault / nominal).toFixed(6)
      : (valueDefault / nominal);
  const priceUSD =
    ((valueDefault / (valueUSD * nominal)) % 1) !== 0
      ? (valueDefault / (valueUSD * nominal)).toFixed(6)
      : (valueDefault / (valueUSD * nominal));

  return (
    <li className="currency">
      <img
        className="currency__flag"
        src={listFlags[`${charCode}`]}
        alt={charCode}
      />
      <p className="currency__text">{coin}</p>
      <p className="currency__text">{charCode}</p>
      <p className="currency__text">=</p>
      <p className="currency__text currency__text_wrap">
        {defaultCurrency
          ? priceDefault
          : data.Valute && data.Valute['USD'].Value
          ? priceUSD
          : '?'
        }
      </p>
      <p className="currency__text">
        {defaultCurrency ? DEFAULT_CURRENCY : 'USD'}
      </p>
      {defaultCurrency ? (
        <img
          className="currency__flag"
          src={listFlags[DEFAULT_CURRENCY]}
          alt={DEFAULT_CURRENCY}
        />
      ) : (
        <img
          className="currency__flag"
          src={listFlags['USD']}
          alt="USD"
        />
      )}
    </li>
  );
}

export default Currency;
