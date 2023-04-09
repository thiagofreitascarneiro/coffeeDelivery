import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaults'
import { GlobalStyle } from './styles/themes/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AppProvider  } from './contexts/CyclesContexts'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <AppProvider>
        <Router  />
      </AppProvider >
      
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
   
  )
}

export default App
