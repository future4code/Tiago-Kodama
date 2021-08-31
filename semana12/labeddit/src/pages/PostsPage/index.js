import GlobalContext from '../../global/GlobalContext'
import Post from "../../components/post";
import Alert from '@material-ui/lab/Alert';
import { StyledPostsPage } from './styled'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

function PostsPage() {
  // useProtectedPage()

  const [message, setMessage] = useState('')
  const { states, setters, requests } = useContext(GlobalContext)

  useEffect(() => {
    requests.getPosts(setMessage)

    // eslint-disable-next-line
  }, [])

    return (
      <StyledPostsPage>
        {states.posts && states.posts.map(post => (
          <Post data={post} key={post.id}/>
        ))}
        {message && <Alert severity="warning">{message}</Alert>}
      </StyledPostsPage>
    );
  }
  
  export default PostsPage;
  