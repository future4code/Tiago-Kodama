import GlobalContext from '../../global/GlobalContext'
import Post from "../../components/post";
import Alert from '@material-ui/lab/Alert';
import { StyledPostsPage } from './styled'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from '@material-ui/core';

function PostsPage() {
  useProtectedPage()
  
  const [message, setMessage] = useState('')
  const [page, setPage] = useState(1)
  const { states, setters, requests } = useContext(GlobalContext)

  const handleChangePage = value => {
    if(value<1 && page===1) return
    setPage(page+value)
  }

  const handleVotePost = (id, direction) => {
    requests.votePost(id, direction, page, setMessage)
  }

  useEffect(() => {
    requests.getPosts(page, setMessage)
    // eslint-disable-next-line
  }, [page])

    return (
      <StyledPostsPage>
        {states.posts && states.posts.map(post => (
          <Post 
            data={post}
             key={post.id}
             handleVotePost={handleVotePost}
             />
        ))}
        {message && <Alert severity="warning">{message}</Alert>}
        <div>
          <Button onClick={() => handleChangePage(-1)}>Previous</Button>
          {page}
          <Button onClick={() => handleChangePage(1)}>Next</Button>
        </div>
      </StyledPostsPage>
    );
  }
  
  export default PostsPage;
  