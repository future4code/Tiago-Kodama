import { StyledCommentPage, StyledCommentContainer, StyledForm } from './styled'
import Alert from '@material-ui/lab/Alert';

import { Button } from "@material-ui/core";
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import Comment from "../../components/comment";
import GlobalContext from '../../global/GlobalContext'
import Post from "../../components/post";

function CommentsPage() {
  const { id } = useParams()
  const { states, setters, requests } = useContext(GlobalContext)

  const post = states.posts.filter(post => id===post.id)[0]
  const [message, setMessage] = useState('')

  useEffect(() => {
    requests.getPostComments(id, setMessage)

  // eslint-disable-next-line
  }, [])

  console.log(states.commentsOfSomePost)

  return (
    <StyledCommentPage>
      {message && <Alert severity="warning">{message}</Alert>}
      <Post data={post} />
      <StyledCommentContainer>
        <StyledForm>
          <input />
          <Button>Comment</Button>
        </StyledForm>
        {
          states.commentsOfSomePost &&
          states.commentsOfSomePost.map(comment => (
            <Comment data={comment}/>
          ))
        }
      </StyledCommentContainer>
    </StyledCommentPage>
  );
}

export default CommentsPage;
