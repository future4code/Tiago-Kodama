import { Button } from '@material-ui/core'
import { StyledComment } from './styled'
import { formatDate } from '../../tools/convertDates'

export default function Comment({data}){
    return (
        <StyledComment>
            <div>
                <h4>{data.username}</h4><h5>{formatDate(data.createdAt)}</h5>
            </div>
            <p>
                {data.body}
            </p>
            <div>
                <Button>{data.voteSum===null? `Like` : `${data.voteSum} Likes`}</Button>
            </div>
        </StyledComment>
    );
}