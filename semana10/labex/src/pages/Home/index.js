import {useHistory} from 'react-router-dom'
import { pathListTrips, pathAdmin } from '../../constants/paths';

import {Container, Box, ButtonPrimary, PageTitle} from '../../style/global'

export default function Home(){

    const history = useHistory()

    return (
        <Container>
            <Box>
                <PageTitle>Home</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push(pathListTrips)}>ListTrips</ButtonPrimary>
                <ButtonPrimary onClick={() => history.push(pathAdmin)}>Admin</ButtonPrimary>
            </Box>
        </Container>
    );
}