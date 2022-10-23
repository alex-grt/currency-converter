import './Preloader.css';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { createPortal } from 'react-dom';

const Preloader: FC = () => {
  const modalRoot = document.querySelector('#modals') as HTMLElement;
  const isOpen = useAppSelector(store => store.preloader.open);

  return createPortal(
    <div
      className={`preloader ${isOpen && 'preloader_opened'}`}
    >
      <div className='preloader__image' />
    </div>
    , modalRoot
  );
}

export default Preloader;
