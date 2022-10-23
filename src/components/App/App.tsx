import './App.css';
import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getData, SET_RUB, SET_THEME, SET_USD } from '../../services/actions';
import { DEFAULT_LANG } from '../../utils/constants';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ConverterPage from '../../pages/ConverterPage/ConverterPage';
import ExchangeRates from '../../pages/ExchangeRates/ExchangeRates';
import NavigationPanel from '../NavigationPanel/NavigationPanel';
import Preloader from '../Preloader/Preloader';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { lightTheme } = useAppSelector(store => store.theme);
  const storageData = localStorage.getItem('lightTheme');

  useEffect(() => {
    if (navigator.language === DEFAULT_LANG) {
      dispatch({ type: SET_RUB });
    } else {
      dispatch({ type: SET_USD });
    };

    if (storageData) {
      dispatch({
        type: SET_THEME,
        payload: JSON.parse(storageData)
      });
    };

    dispatch(getData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`app ${lightTheme ? 'app_theme_light' : ''}`}>
      <Header />
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<ConverterPage/>} />
        <Route path="/rates" element={<ExchangeRates/>} />
      </Routes>
      <Footer />
      <Preloader />
    </div>
  );
}

export default App;
