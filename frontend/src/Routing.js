import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Trainers from './Components/Trainers';

function Routing(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/Aboutus" exact component={Aboutus}/>
                <Route path="/Contactus" exact component={Contactus}/>
                <Route path="/Trainers" exact component={Trainers}/>

            </Switch>
        </Router>
    )
}

export default Routing;