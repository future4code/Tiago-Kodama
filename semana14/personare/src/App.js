import Routers from "./routes/routers";
import GlobalStateContext from './global/GlobalStateContext'


function App() {
  return (
    <GlobalStateContext>
      <Routers />
    </GlobalStateContext>
  );
}

export default App;
