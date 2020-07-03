import { createGlobalStyle } from 'styled-components';

import Chivo from './Chivo-Regular.woff';
import Overpass from './Overpass-Regular.woff';
import GuardianSansRegular from './GuardianSansRegular.woff';
import TTNormsBold from './TTNormsPro-bold.woff2'
import TTNorms from './TTNormsPro-regular.woff2'
import TTNormsLight from './TTNormsPro-light.woff2'
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
@font-face {
        font-family: 'TTNormsBold';
        src: local('TTNormsBold'),
        url(${Chivo}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
@font-face {
        font-family: 'TTNorms';
        src: local('TTNorms'),
        url(${Chivo}) format('woff');
        font-style: normal;
    }
@font-face {
        font-family: 'TTNormsLight';
        src: local('TTNormsLight'),
        url(${Chivo}) format('woff');
        font-style: normal;
    }

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
@font-face {
    font-family: "Publico"; 
    src: url("//db.onlinewebfonts.com/t/0d39a4e3c36c494c84e2c38618bfed33.eot"); 
    src: url("//db.onlinewebfonts.com/t/0d39a4e3c36c494c84e2c38618bfed33.woff2") format("woff2"), 
    url("//db.onlinewebfonts.com/t/0d39a4e3c36c494c84e2c38618bfed33.woff") format("woff"), }

    @font-face {
    font-family: 'Guardian Sans Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Guardian Sans Regular'), url(${GuardianSansRegular}) format('woff');
}
`;

