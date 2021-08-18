import { pathAdmin, pathApplicationFormPage, pathCreateTrip, pathListTrips, pathLogin, pathTripsDetailsPage } from '../constants/paths'
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
                <Route exact path={pathAdmin}>
                    <AdminHomePage />
                </Route>
                <Route exact path={pathApplicationFormPage}>
                    <ApplicationFormPage />
                </Route>
                <Route exact path={pathCreateTrip}>
                    <CreateTripPage />
                </Route>
                <Route exact path={pathListTrips}>
                    <ListTripPage />
                </Route>
                <Route exact path={pathLogin}>
                    <LoginPage />
                </Route>
                <Route exact path={`${pathTripsDetailsPage}/:id`}>
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}