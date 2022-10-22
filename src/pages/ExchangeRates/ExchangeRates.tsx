import './ExchangeRates.css';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { ICurrencyData } from '../../utils/types';
import { rubleData } from '../../utils/rubleData';
import Currency from '../../components/Currency/Currency';
import Switch from '../../components/Switch/Switch';

const ExchangeRates: FC = () => {
  const { data } = useAppSelector(store => store.data);
  const listCurrencies: ICurrencyData[] = data.Valute
    ? Object.values(data.Valute)
    : [];
  const modifiedListCurrencies: ICurrencyData[] = [
    rubleData,
    ...listCurrencies
  ];

  return (
    <main className="rates" aria-label="курсы валют">
      <Switch />
      <ul className="rates__list">
        {modifiedListCurrencies?.map((item, index) => (
          <Currency key={index} item={item} />
        ))}
      </ul>
    </main>
  );
}

export default ExchangeRates;
