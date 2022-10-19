import { IContact, IProjectData } from './types';
import imageCode from '../images/code.jpg';
import portfolio from '../images/portfolio.jpg';
import stellarBurgers from '../images/stellar-burgers.jpg';
import moviesExplorer from '../images/movies-explorer.jpg';
import mesto from '../images/mesto.jpg';
import russianTravel from '../images/russian-travel.jpg';
import moviesMain from '../images/movies-explorer/movies-main.png';
import moviesRegistration from '../images/movies-explorer/movies-registration.png';
import moviesLogin from '../images/movies-explorer/movies-login.png';
import moviesAllMovies from '../images/movies-explorer/movies-allMovies.png';
import moviesSavedMovies from '../images/movies-explorer/movies-savedMovies.png';
import moviesProfile from '../images/movies-explorer/movies-profile.png';

export const stack: string[] = [
  'React',
  'Redux',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS'
];

export const contacts: IContact[] = [
  {
    index: 1,
    title: 'GitHub',
    link: 'https://github.com/alex-grt'
  },
  {
    index: 2,
    title: 'Telegram',
    link: 'https://t.me/gnosio'
  },
  {
    index: 3,
    title: 'E-Mail',
    link: 'mailto:dr.grooter@gmail.com'
  },
];

export const portfolioData: IProjectData = {
  index: 1,
  name: 'Портфолио',
  stack: [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS'
  ],
  link: 'https://alex-grt.github.io/portfolio',
  image: portfolio,
  linkCode: 'https://github.com/alex-grt/portfolio',
  imageCode: imageCode
}

export const projectsData: IProjectData[] = [
  {
    index: 2,
    name: 'Звёздные бургеры',
    stack: [
      'React',
      'Redux',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Jest',
      'Cypress',
      'WebSocket'
    ],
    link: 'https://alex-grt.github.io/react-burger/',
    image: stellarBurgers,
    linkCode: 'https://github.com/alex-grt/react-burger',
    imageCode: imageCode
  },
  {
    index: 3,
    name: 'Movies Explorer',
    stack: [
      'React',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    image: moviesExplorer,
    linkCode: 'https://github.com/alex-grt/movies-explorer-frontend',
    imageCode: imageCode,
    screenshots: [
      {
        index: 1,
        name: 'Главная страница',
        screenshot: moviesMain
      },
      {
        index: 2,
        name: 'Страница регистрации',
        screenshot: moviesRegistration
      },
      {
        index: 3,
        name: 'Страница входа',
        screenshot: moviesLogin
      },
      {
        index: 4,
        name: 'Все фильмы',
        screenshot: moviesAllMovies
      },
      {
        index: 5,
        name: 'Сохранённые фильмы',
        screenshot: moviesSavedMovies
      },
      {
        index: 6,
        name: 'Страница профиля',
        screenshot: moviesProfile
      }
    ]
  },
  {
    index: 4,
    name: 'Место',
    stack: [
      'React',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    link: 'https://alex-grt.github.io/react-mesto-auth/',
    image: mesto,
    linkCode: 'https://github.com/alex-grt/react-mesto-auth',
    imageCode: imageCode
  },
  {
    index: 5,
    name: 'Путешествия по России',
    stack: [
      'HTML',
      'CSS'
    ],
    link: 'https://alex-grt.github.io/russian-travel/',
    image: russianTravel,
    linkCode: 'https://github.com/alex-grt/russian-travel',
    imageCode: imageCode
  }
]
