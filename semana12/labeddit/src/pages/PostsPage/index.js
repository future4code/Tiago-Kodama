import Post from "../../components/post";
import { StyledPostsPage } from './styled'

function PostsPage() {
    return (
      <StyledPostsPage>
        <Post />
        <Post />
        <Post />
      </StyledPostsPage>
    );
  }
  
  export default PostsPage;
  