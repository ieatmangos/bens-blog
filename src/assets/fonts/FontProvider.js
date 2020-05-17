import { createGlobalStyle } from 'styled-components';

import Chivo from './Chivo-Regular.woff';
import Overpass from './Overpass-Regular.woff';
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
@font-face {
        font-family: 'Chivo';
        src: local('Chivo'),
        url(${Chivo}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
@font-face {
        font-family: 'Overpass';
        src: local('Overpass'),
        url(${Overpass}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;