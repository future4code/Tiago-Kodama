import Post from "../../components/post";
import { StyledPostsPage } from './styled'
import { useProtectedPage } from "../../hooks/useProtectedPage"

function PostsPage() {
  useProtectedPage()

    return (
      <StyledPostsPage>
        <Post />
        <Post />
        <Post />
      </StyledPostsPage>
    );
  }
  
  export default PostsPage;
  