import './App.css';
import Navbar from "./Components/Navbar";
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import Routing from './Routing';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Store from './Store';
import { Provider } from 'react-redux';

import Footer from './Components/Footer';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary:{
      main: '#424242',
    }
  },
});

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar/>
            <Routing/>
          <Footer/>
        </Router>
      </MuiThemeProvider>
    </div>
    </Provider>
  );
}

export default App;
