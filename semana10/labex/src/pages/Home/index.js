import {useHistory} from 'react-router-dom'

import {Container, Box, ButtonPrimary, PageTitle} from '../../style/global'

export default function Home(){

    const history = useHistory()

    return (
        <Container>
            <Box>
                <PageTitle>Home</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push('/trips/list')}>ListTrips</ButtonPrimary>
                <ButtonPrimary onClick={() => history.push('/login')}>Admin</ButtonPrimary>
            </Box>
        </Container>
    );
}