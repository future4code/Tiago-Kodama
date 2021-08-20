import { useHistory } from 'react-router-dom'
import { pathListTrips, pathAdmin } from '../../constants/paths';

import { Container, Box, ButtonPrimary, PageTitle } from '../../style/global'

export default function Home() {

    const history = useHistory()

    return (
        <Container>
            <Box>
                <PageTitle>Home</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push(pathListTrips)}>Ver viagems</ButtonPrimary>
                <ButtonPrimary onClick={() => history.push(pathAdmin)}>Administração</ButtonPrimary>
            </Box>
        </Container>
    );
}