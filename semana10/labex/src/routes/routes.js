import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import ListTripPage from '../pages/ListTripPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/admin/trips/list">
                    <AdminHomePage />
                </Route>
                <Route exact path="/trips/application">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/admin/trips/create">
                    <CreateTripPage />
                </Route>
                <Route exact path="/trips/list">
                    <ListTripPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}