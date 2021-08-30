import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import CommentsPage from '../pages/CommentsPage'
import PostsPage from '../pages/PostsPage'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route>
                    <SignUpPage exact path='signup'/>
                </Route>
                <Route>
                    <CommentsPage exact path='comments:id'/>
                </Route>
                <Route>
                    <PostsPage exact path='posts:id'/>
                </Route>
                <Route>
                    <p>Error: Page do not exist</p>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router