import { Container } from "@material-ui/core";
import { Header } from "./Header";
import { Launches } from "./Launches";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Launches />
      </main>
    </Container>
  );
}

export default App;
