import { StyledPost, StyledButton } from './styled'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useState } from 'react';
import { formatDate } from '../../tools/convertDates'
import { useHistory } from 'react-router-dom';
import { goToComments } from '../../routers/coordenator'

export default function Post({data, handleVotePost}){

    const [myVote, setMyVote] = useState(data.userVote===null? 0 : Number(data.userVote))
    const history = useHistory()
    
    const handleLike = direction => {
        if(myVote===direction) return

        handleVotePost(data.id, direction)
        setMyVote(direction)
    }

    return (
        <StyledPost>
            <aside>
                <ArrowUpwardIcon 
                color={myVote===1? 'primary':'inherit'} 
                onClick={() => handleLike(1)}
                />
                {Number(data.voteSum)===null? 0: data.voteSum}
                <ArrowDownwardIcon 
                color={myVote===-1? 'primary':'inherit'}
                onClick={() => handleLike(-1)}
                />
            </aside>
            <header>
                <h4>{data.username}</h4>
                <h5>{formatDate(data.createdAt)}</h5>
            </header>
            <main>
                <strong>{data.title}</strong>
                <p>{data.body}</p>
            </main>
            <footer>
                <StyledButton
                    variant="outlined"
                    onClick={() => goToComments(history, 5)}
                >{data.commentCount && data.commentCount>1?
                 `${data.commentCount} Comments`
                 :'Comment'}
                </StyledButton>
            </footer>
        </StyledPost>
    );
}