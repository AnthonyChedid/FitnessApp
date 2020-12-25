import './App.css';
import Navbar from "./Components/Navbar";
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import Routing from './Routing';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },

});


function App() {
  return (
    <div className="App">
      <Routing/>
      <MuiThemeProvider theme={theme}>
      <Navbar/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
