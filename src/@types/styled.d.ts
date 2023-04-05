import { defaultTheme } from './../styles/themes/defaults';
import 'styled-components';
import { defaultTheme } from '../styles/themes/defaults';

const ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface defaultTheme extends ThemeType {}
}