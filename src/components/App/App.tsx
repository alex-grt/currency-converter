import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ConverterPage from '../../pages/ConverterPage/ConverterPage';
import ExchangeRates from '../../pages/ExchangeRates/ExchangeRates';

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>        
        <Route path="/" element={<ConverterPage/>} /> 
        <Route path="/rates" element={<ExchangeRates/>} /> 
      </Routes>
      <Footer />     
    </>
  );
}

export default App;
