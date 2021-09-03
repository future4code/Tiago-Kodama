import { StyledCommentPage, StyledCommentContainer, StyledForm } from './styled'
import Alert from '@material-ui/lab/Alert';

import { Button } from "@material-ui/core";
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import Comment from "../../components/comment";
import GlobalContext from '../../global/GlobalContext'
import Post from "../../components/post";
import { useProtectedPage } from '../../hooks/useProtectedPage';

function CommentsPage() {
  useProtectedPage()

  const { id } = useParams()
  const { states, requests } = useContext(GlobalContext)
  const { form, handleInputChange, clear } = useForm({ Comment: '' })
  const [message, setMessage] = useState('')
  const [post, setPost] = useState({})

  
  const handleSendComment = e => {
    e.preventDefault();
    requests.createComment(id, form.Comment, setMessage)
    clear()
  }
  
  
  useEffect(() => {
    requests.getPostComments(id, setMessage)

    if(states.posts)
      setPost(states.posts.filter(post => id === post.id)[0])

    // eslint-disable-next-line
  }, [])


  return (
    <StyledCommentPage>
      {message && <Alert severity="warning">{message}</Alert>}
      {
        states.posts && states.posts.length?
        <>
          <Post data={post} />
          <StyledCommentContainer>
            <StyledForm onSubmit={handleSendComment}>
              <input
                type='text'
                name={'Comment'}
                onChange={handleInputChange}
                value={form.Comment}
                placeholder={'Write something beautiful'}
                required
                autoComplete='off'
              />
              <Button type='submit'>Comment</Button>
            </StyledForm>
            {
              states.commentsOfSomePost &&
              states.commentsOfSomePost.map(comment => (
                <Comment data={comment} setMessage={setMessage} key={comment.id} />
              ))
            }
          </StyledCommentContainer>
        </> :
        <p>Please, select the post correctly</p>
      }
    </StyledCommentPage>
  );
}

export default CommentsPage;
