import { pathTripsDetailsPage } from '../../constants/paths'
import { StyledCardPersons } from './styled'

import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from "react";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CardPersonsToAdmin({ personInfos={}, handleButtons={} }) {
    const {name, profession, ...othersInfos} = personInfos
    const [seeMore, setSeeMore] = useState(false)

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    handleButtons['Ver mais'] = () => setSeeMore(!seeMore)

    return <StyledCardPersons>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {name} {bull} {profession}
            </Typography>
            {seeMore && Object.keys(othersInfos).reverse().map((info, index) => (
                <Typography variant="body2" component="p" key={index}>
                {(info.toUpperCase())}:  {personInfos[info]}          
                </Typography>
            ))}
        </CardContent>
        <CardActions>
            {Object.keys(handleButtons).map((handleButton, index) => (
                <Button size="small" onClick={handleButtons[handleButton]} key={index}>
                    {handleButton}
                </Button>
            ))}
        </CardActions>
    </StyledCardPersons>
}