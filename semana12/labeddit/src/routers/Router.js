import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import CommentsPage from '../pages/CommentsPage'
import PostsPage from '../pages/PostsPage'
import Header from '../components/header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/signup'>
                    <SignUpPage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/comments/:id'>
                    <CommentsPage />
                </Route>
                <Route  exact path='/posts/:id'>
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