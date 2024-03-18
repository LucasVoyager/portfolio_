import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import ThemeLight from './themes/light'
import ThemeDark from './themes/dark'

function App() {
  const [themeDarkOn, setThemeDarkON] = useState(false)

  function changeTheme() {
    setThemeDarkON(!themeDarkOn)
  }

  return (
    <ThemeProvider theme={themeDarkOn ? ThemeDark : ThemeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
