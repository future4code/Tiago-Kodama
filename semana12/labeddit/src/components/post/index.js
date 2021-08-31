import { StyledPost, StyledButton } from './styled'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useEffect, useState } from 'react';
import { formatDate } from '../../tools/convertDates'
import { useHistory } from 'react-router-dom';
import { goToComments } from '../../routers/coordenator'

export default function Post({data}){
   
    const currentCount = Number(data.voteSum===null? 0: data.voteSum)
    const [amIliked, setAmILiked] = useState(data.userVote)
    const [voteCounter, setVoteCounter] = useState(currentCount)
    const history = useHistory()

    useEffect(() => {
        if(amIliked===null) return


        const voteValue = amIliked? 1:-1
        setVoteCounter(currentCount+voteValue)

        // eslint-disable-next-line
    }, [amIliked])
    

    return (
        <StyledPost>
            <aside>
                <ArrowUpwardIcon 
                color={amIliked===true? 'primary':'inherit'} 
                onClick={() => setAmILiked(true)}
                />
                {voteCounter}
                <ArrowDownwardIcon 
                color={amIliked===false? 'primary':'inherit'}
                onClick={() => setAmILiked(false)}
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