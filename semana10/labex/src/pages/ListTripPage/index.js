import {useHistory} from 'react-router-dom'
import {Container, Box, ButtonPrimary, PageTitle} from '../../style/global'

export default function ListTripPage(){

    const history = useHistory()
    return (
        <Container>
            <Box>
                <PageTitle>List Trip Page</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push('/trips/application')}>ApplicationFormPage</ButtonPrimary>
            </Box>
        </Container>
    );
}