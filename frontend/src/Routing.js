import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Trainers from './Components/Trainers';

function Routing(){
    return(
        
            <Switch>
                <Route path="/aboutus"  component={Aboutus}/>
                <Route path="/contactus" component={Contactus}/>
                <Route path="/trainers" component={Trainers}/>
                <Route path="/" exact component={Landing}/>
            </Switch>
        
    )
}

export default Routing;