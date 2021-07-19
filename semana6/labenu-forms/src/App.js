import Form from "./Componets/Form";
import Styled from 'styled-components';

const StyledApp = Styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function App() {
  return (
    <StyledApp>
      <Form />
    </StyledApp>
  );
}

export default App;
