import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Options from '../pages/options'
import Details from '../pages/details'

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/options'>
                    <Options />
                </Route>
                <Route exact path='/details'>
                    <Details />
                </Route>
                <Route>
                    <p>Page not found</p>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}