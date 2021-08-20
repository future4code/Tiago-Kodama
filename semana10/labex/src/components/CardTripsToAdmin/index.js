import { useHistory } from "react-router-dom"
import { pathTripsDetailsPage } from '../../constants/paths'
import { StyledCardTrip } from './styled'

import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function CardTripsToAdmin({ tripInfos, handleRemoveButton }) {
    const history = useHistory()
 
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    return <StyledCardTrip>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {tripInfos.date} {bull} {tripInfos.planet} {bull} {tripInfos.durationInDays} dias
            </Typography>
            <Typography variant="h5" component="h2">
                {tripInfos.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            ID: {tripInfos.id}
            </Typography>
            <Typography variant="body2" component="p">
            {tripInfos.description}          
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => history.push(`${pathTripsDetailsPage}/${tripInfos.id}`)}>Detalhes</Button>
            <Button size="small" onClick={() => handleRemoveButton(tripInfos.id)}>Deletar</Button>
        </CardActions>
    </StyledCardTrip>
}