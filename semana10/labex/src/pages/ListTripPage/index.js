import {useHistory} from 'react-router-dom'
import { pathApplicationFormPage } from '../../constants/paths';

import {Container, Box, ButtonPrimary, PageTitle} from '../../style/global'

export default function ListTripPage(){

    const history = useHistory()
    return (
        <Container>
            <Box>
                <PageTitle>List Trip Page</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push(pathApplicationFormPage)}>ApplicationFormPage</ButtonPrimary>
            </Box>
        </Container>
    );
}