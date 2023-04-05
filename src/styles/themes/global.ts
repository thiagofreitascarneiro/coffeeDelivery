import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${(props: any) => props.theme['background']};
        color: ${(props: any) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    
`