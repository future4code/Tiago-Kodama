import GlobalContext from '../../global/GlobalContext'
import Alert from '@material-ui/lab/Alert';
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledPostsPage } from './styled'
import TopPost from '../../components/topPost';


function Home() {
  useProtectedPage()

  const [message, setMessage] = useState('')
  const { states, setters, requests } = useContext(GlobalContext)


  useEffect(() => {
    requests.getAllPosts(setMessage)
    // eslint-disable-next-line
  }, [])

  if (states.isLoading && !states.allPosts.length) {
    return (
      <StyledPostsPage>
        <CircularProgress />
      </StyledPostsPage>
    );
  }


  return (
    <StyledPostsPage>
      <h2>Top posts</h2>
      {message && <Alert severity="warning">{message}</Alert>}
      {
        states.allPosts ?
          <>
            {states.allPosts
            .sort((postA, postB) => {
              const sumA = Number(postA.voteSum) + Number(postA.commentCount)
              const sumB = Number(postB.voteSum) + Number(postB.commentCount)

              if(sumA===sumB) return 0
              else if(sumA>sumB) return -1
              else return 1
            })
            .map(post => (
              <TopPost post={post} />
            ))}
          </>
          : <p>You don't have any post</p>
      }
    </StyledPostsPage>
  );
}

export default Home;
