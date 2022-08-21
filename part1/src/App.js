import "./App.css";
import Mensaje from "./Mensaje";

function App() {
  const a = 2;
  const b = 3;

  return (
    <div className="App">
      <Mensaje styleColor="red" message="Test de mensaje" />
      <Mensaje styleColor="blue" message="Utilizando react" />
      <div>
        <p>{a + b}</p>
      </div>
    </div>
  );
}

export default App;
