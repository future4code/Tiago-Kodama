import { StyledCard } from './styled'

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
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

export default function CardTripsToSubscribe({ tripInfo }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return <StyledCard>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {tripInfo.planet}
      </Typography>
      <Typography variant="h5" component="h2">
        {tripInfo.name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {tripInfo.date} {bull} {tripInfo.durationInDays} dias
      </Typography>
      <Typography variant="body2" component="p">
        {tripInfo.description}
      </Typography>
    </CardContent>
  </StyledCard>
}
