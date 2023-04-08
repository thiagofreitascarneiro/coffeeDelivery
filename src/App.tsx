import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaults'
import { GlobalStyle } from './styles/themes/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      
        <Router  />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
   
  )
}

export default App
