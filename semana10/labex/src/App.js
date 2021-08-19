import styled from "styled-components"
import { StylesProvider } from '@material-ui/core/styles';

import { Routes } from "./routes/routes"

export default function App() {
  return (
    <StylesProvider injectFirst>
      <ContainerApp>
        <Routes />
      </ContainerApp>
    </StylesProvider>
  );
}

const ContainerApp = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  width: 99vw;
  height: 97vh;
`