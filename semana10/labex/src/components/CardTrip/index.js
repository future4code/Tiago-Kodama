import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { StyledCard } from './styled'
import { useStyles } from '../../hooks/useStyles';

export default function CardTrip({ tripInfo }) {
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
