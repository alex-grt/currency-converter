import './NavigationPanel.css';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationPanel: FC = () => {
  return (
    <nav className="nav-panel" aria-label="панель навигации">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "nav-panel__link nav-panel__link_active"
            : "nav-panel__link"
        }
        end
      >
        <p className="nav-panel__text">Конвертер</p>
      </NavLink>
      <NavLink
        to="/rates"
        className={({ isActive }) =>
          isActive
            ? "nav-panel__link nav-panel__link_active"
            : "nav-panel__link"
        }
      >
        <p className="nav-panel__text">Курсы валют</p>
      </NavLink>
    </nav>
  );
}

export default NavigationPanel;
