import { render } from "react-dom";
// import Pet from "./Pet";
import { SearchParams } from "./SearchParams";
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Dogão de cria" animal="Cachorro" breed="Pitbullzao brabo" />
      <Pet name="Dogão de cria" animal="Cachorro" breed="Pitbullzao brabo" />
      <Pet name="Dogão de cria" animal="Cachorro" breed="Pitbullzao brabo" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
