import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Basic from './components/Basic'

import About from './components/About'
import Account from './components/Account'
import ContactUs from './components/ContactUs'
import Financial from './components/Financial'
import Home from './components/Home'
import Ideology from './components/Ideology'
import Legal from './components/Legal'
import Legislative from './components/Legislative'
import Ngao from './components/Ngao'
import Password from './components/Password'
import Report from './components/Report'
import Rights from './components/Rights'

function App() {
    return(
        <div>
            <Router>
                <Basic />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/account" component={Account} />
                        <Route path="/contactus" component={ContactUs} />
                        <Route path="/financial" component={Financial} />
                        <Route path="/home" component={Home} />
                        <Route path="/ideology" component={Ideology} />
                        <Route path="/legal" component={Legal} />
                        <Route path="/legislative" component={Legislative} />
                        <Route path="/ngao" component={Ngao} />
                        <Route path="/password" component={Password} />
                        <Route path="/report" component={Report} />
                        <Route path="/rights" component={Rights} />
                    </Switch>
            </Router>
        </div>
    )
};

export default App;
