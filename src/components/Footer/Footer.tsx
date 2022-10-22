import './Footer.css';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a
        className="footer__link"
        href="https://www.cbr-xml-daily.ru/"
        target="_blank"
        rel="noreferrer"
      >
        Курсы валют, API
      </a>
    </footer>
  );
}

export default Footer;
