import {ThemeProvider} from "./context/ThemeProvider.tsx";
import {ToggleTheme} from "./components/toggle-theme/ToggleTheme.tsx";

function App() {

  return (
    <>
      <ThemeProvider>
          <h1>MovieHub</h1>
          <ToggleTheme/>
      </ThemeProvider>
    </>
  )
}

export default App
