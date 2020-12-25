import './App.css';
import Navbar from "./Components/Navbar";
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import Routing from './Routing';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

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
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar/>
          <Routing/>
            
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
