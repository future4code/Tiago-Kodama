import GlobalContext from '../../global/GlobalContext'
import Alert from '@material-ui/lab/Alert';
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledPostsPage } from './styled'
import TopPost from '../../components/topPost';

import { useRef } from 'react';

function Home() {
  useProtectedPage()

  const [message, setMessage] = useState('')
  const { states, requests } = useContext(GlobalContext)
  const [pageNum, setPageNum] = useState(1);
  const [lastElement, setLastElement] = useState(null);

  const TOTAL_PAGES = 3;

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPageNum((no) => no + 1);
        }
      })
  );


  useEffect(() => {
    requests.getAllPosts(pageNum, setMessage)

    // eslint-disable-next-line
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);


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
              .map(post => (
                <div
                  key={post.id}
                  ref={setLastElement}
                >
                  <TopPost post={post} />
                </div>
              ))}
          </>
          : <p>You don't have any post</p>
      }

      {states.isLoading && <p className='text-center'>loading...</p>}

      {pageNum - 1 === TOTAL_PAGES && (
        <p className='text-center my-10'>:)</p>
      )}
    </StyledPostsPage>
  );
}

export default Home;
