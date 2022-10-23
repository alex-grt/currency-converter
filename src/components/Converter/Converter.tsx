import './Converter.css';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { ICurrencies } from '../../utils/types';
import { DEFAULT_CURRENCY } from '../../utils/constants';
import { rubleData } from '../../utils/rubleData';

const Converter: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('0');
  const [charWrapping, setCharWrapping] = useState(false);
  const { data } = useAppSelector(store => store.data);
  const modifiedData: ICurrencies = {
    RUB: rubleData,
    ...data.Valute
  };

  function setValue(evt: ChangeEvent<HTMLInputElement>) {
    setInputValue(evt.target.value);
  };

  function convertCurrency(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const amount = parseFloat(inputValue.replaceAll(',', '.'));
    const normalizedStr = inputValue.toUpperCase();
    const indexSubstr = normalizedStr.indexOf(' IN ');
    const currencyCode = normalizedStr.slice(indexSubstr - 3, indexSubstr);
    const baseCurrencyCode = normalizedStr.slice(
      indexSubstr + 4,
      indexSubstr + 7
    );

    const valueDefault = modifiedData[`${currencyCode}`]?.Value;
    const nominal = modifiedData[`${currencyCode}`]?.Nominal;
    const valueUSD = modifiedData['USD']?.Value;
    const priceDefault =
      ((valueDefault / nominal) % 1) !== 0
        ? (amount * (valueDefault / nominal)).toFixed(6)
        : (amount * (valueDefault / nominal));
    const priceUSD =
      ((valueDefault / (valueUSD * nominal)) % 1) !== 0
        ? (amount * (valueDefault / (valueUSD * nominal))).toFixed(6)
        : (amount * (valueDefault / (valueUSD * nominal)));
    const calculationResult =
      baseCurrencyCode === DEFAULT_CURRENCY
        ? `${priceDefault} руб.`
        : baseCurrencyCode === 'USD'
        ? `${priceUSD} $`
        : 'Проверьте код валюты расчётов';
    const finalResult = calculationResult.includes('NaN')
      ? 'Нет данных о валюте, либо проверьте формат ввода'
      : calculationResult;

    if (finalResult.includes('руб.') || finalResult.includes('$')) {
      setCharWrapping(true);
    } else {
      setCharWrapping(false);
    };

    setResult(finalResult);
  };

  return (
    <div className="converter">
      <p className="converter__text">
        Введите значение в формате:{' '}
        <span className="converter__text-marked">
          количество код in код_валюты_расчёта
        </span>
      </p>
      <div className="converter__note">
        <p className="converter__text converter__text_theme_marked">
          Обратите внимание:
        </p>
        <ol className="converter__note-list">
          <li className="converter__text converter__text_theme_marked">
            коды валют должны быть на английском
          </li>
          <li className="converter__text converter__text_theme_marked">
            поддерживаемые коды валют расчётов: rub и usd
          </li>
        </ol>
      </div>
      <p className="converter__text">
        Например: <span className="converter__text-marked">15 usd in rub</span>
      </p>
      <form
        className="converter__form"
        name="converter"
        onSubmit={convertCurrency}
      >
        <input
          className="converter__input"
          name="amount"
          type="text"
          onChange={setValue}
          placeholder="Введите значение"
          autoFocus
        />
        <button
          className={`converter__button ${
            inputValue.length < 12 && 'converter__button_inactive'
          }`}
          type="submit"
          disabled={inputValue.length < 12 ? true : false}
        >
          Конвертировать
        </button>
      </form>
      <p
        className="converter__result"
        style={charWrapping ? {wordBreak: 'break-all'} : {wordBreak: 'normal'}}
      >
        {result}
      </p>
    </div>
  );
}

export default Converter;
