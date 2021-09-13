import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                </Route>
                <Route exact path='/options'>

                </Route>
                <Route exact path='/details'>

                </Route>
            </Switch>
        </BrowserRouter>
    );
}