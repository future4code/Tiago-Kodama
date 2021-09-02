import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import CommentsPage from '../pages/CommentsPage'
import PostsPage from '../pages/PostsPage'
import Home from '../pages/Home'
import Header from '../components/header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/signup'>
                    <SignUpPage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/comments/:id'>
                    <CommentsPage />
                </Route>
                <Route  exact path='/posts'>
                    <PostsPage/>
                </Route>
                <Route>
                    <p>Error: Page do not exist</p>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router