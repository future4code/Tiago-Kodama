import { useHistory } from 'react-router-dom'
import { pathListTrips, pathAdmin } from '../../constants/paths';
import { Box, ButtonPrimary, PageTitle } from '../../style/global'
import { StyledContainer } from './styled'

export default function Home() {

    const history = useHistory()

    return (
        <StyledContainer>
            <Box>
                <PageTitle>Labex</PageTitle>
            </Box>
                <p>Conhecendo os 93 bilhões de anos-luz do seu Universo.</p>
            <Box>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push(pathListTrips)}>Ver viagems</ButtonPrimary>
                <ButtonPrimary onClick={() => history.push(pathAdmin)}>Administração</ButtonPrimary>
            </Box>
        </StyledContainer>
    );
}