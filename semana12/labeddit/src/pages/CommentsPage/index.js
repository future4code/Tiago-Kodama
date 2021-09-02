import { StyledCommentPage, StyledCommentContainer, StyledForm } from './styled'
import { Button } from "@material-ui/core";
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import Comment from "../../components/comment";
import GlobalContext from '../../global/GlobalContext'
import Post from "../../components/post";

function CommentsPage() {
  const { id } = useParams()
  const { states, setters, requests } = useContext(GlobalContext)

  const post = states.posts.filter(post => id===post.id)[0]

  return (
    <StyledCommentPage>
      <Post data={post} />
      <StyledCommentContainer>
        <StyledForm>
          <input />
          <Button>Comment</Button>
        </StyledForm>

        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />


      </StyledCommentContainer>
    </StyledCommentPage>
  );
}

export default CommentsPage;
