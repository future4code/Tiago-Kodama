import { Button } from '@material-ui/core'
import { StyledComment } from './styled'
import { formatDate } from '../../tools/convertDates'
import { useContext, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { handlePlural } from '../../tools/plural'

export default function Comment({data, setMessage}){

    const { states, setters, requests } = useContext(GlobalContext)
    const [myVote, setMyVote] = useState(Number(data.userVote))

    const handleButtonLike = () => {

        switch (myVote) {
            case 0:
                requests.voteComment(data.id, data.postId, setMessage)
                setMyVote(1)
                break;
            case 1:
                requests.changeVoteComment(data.id, data.postId, setMessage)
                setMyVote(-1)
                break;
            case -1:
                requests.deleteVoteComment(data.id, data.postId, setMessage)
                setMyVote(0)
                break;
        
            default:
                break;
        }

    }

    return (
        <StyledComment>
            <div>
                <h4>{data.username}</h4><h5>{formatDate(data.createdAt)}</h5>
            </div>
            <p>
                {data.body}
            </p>
            <div>
                <Button
                    onClick={handleButtonLike}
                    color={myVote===0? 'inherit' : 'primary'}
                >{handlePlural('Like', data.voteSum)}</Button>
            </div>
        </StyledComment>
    );
}