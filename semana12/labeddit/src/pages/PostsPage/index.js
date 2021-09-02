import GlobalContext from '../../global/GlobalContext'
import Post from "../../components/post";
import Alert from '@material-ui/lab/Alert';
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from '@material-ui/core';
import Form from '../../components/form';
import { useForm } from '../../hooks/useForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledPostsPage, StyledForm } from './styled'


function PostsPage() {
  useProtectedPage()

  const [message, setMessage] = useState('')
  const [page, setPage] = useState(1)
  const { form, handleInputChange, clear } = useForm({ Title: '', Body: '' })
  const { states, setters, requests } = useContext(GlobalContext)

  const inputs = [
    {
      label: 'Title',
      type: 'text',
      command: handleInputChange
    },
    {
      label: 'Body',
      type: 'text',
      command: handleInputChange
    }
  ]

  const handleChangePage = value => {
    if (value < 1 && page === 1) return
    setPage(page + value)
  }

  const handleVotePost = (id, direction) => {
    requests.votePost(id, direction, page, setMessage)
  }

  const handleSubmit = e => {
    e.preventDefault()
    requests.createPost(page, form.Title, form.Body, setMessage)
    clear()
  }

  useEffect(() => {
    requests.getPosts(page, setMessage)
    // eslint-disable-next-line
  }, [page])

  if (states.isLoading && !states.posts.length) {
    return (
      <StyledPostsPage>
        <CircularProgress />
      </StyledPostsPage>
    );
  }

  return (
    <StyledPostsPage>
      {message && <Alert severity="warning">{message}</Alert>}
      <StyledForm>
        <Form
          title='Create my post'
          inputs={inputs}
          form={form}
          onsubmit={handleSubmit}
        />
      </StyledForm>
      {
        states.posts ?
          <>
            {states.posts.map(post => (
              <Post
                data={post}
                key={post.id}
                handleVotePost={handleVotePost}
              />
            ))}
            <div>
              <Button onClick={() => handleChangePage(-1)}>Previous</Button>
              {page}
              <Button onClick={() => handleChangePage(1)}>Next</Button>
            </div>
          </>
          : <p>You don't have any post</p>
      }
    </StyledPostsPage>
  );
}

export default PostsPage;
