import Main from './pages/Main'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './ThemeConfig'





function App() {
  
  return (
    <ThemeProvider theme={theme} >
       
        <Main/>
       
    </ThemeProvider>
  );
}

export default App;
