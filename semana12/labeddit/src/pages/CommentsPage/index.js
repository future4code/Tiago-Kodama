import { Button } from "@material-ui/core";
import Comment from "../../components/comment";
import Post from "../../components/post";
import { StyledCommentPage, StyledCommentContainer, StyledForm } from './styled'

function CommentsPage() {
    return (
      <StyledCommentPage>
        <Post />
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
  