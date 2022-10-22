import './ConverterPage.css';
import { FC } from 'react';
import Converter from '../../components/Converter/Converter';

const ConverterPage: FC = () => {
  return (
    <main className="converter-page" aria-label="конвертер валют">
      <Converter />
    </main>
  );
}

export default ConverterPage;
