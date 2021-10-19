import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import { StyledCard } from './styled'
import { formatDate } from '../../tools/convertDates'

export default function TopPost({ post }) {

    return (
        <StyledCard>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post.title.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.username} <small>{formatDate(post.createdAt)}</small>
                        <br />
                        {post.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </StyledCard>
    );
}



