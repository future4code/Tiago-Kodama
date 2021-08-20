import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StyledCardPersons } from './styled'
import { useState } from "react";
import { useStyles } from '../../hooks/useStyles';

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