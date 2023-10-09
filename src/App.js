import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Search defaultCity="Tokyo" />
      </div>
    </div>
  );
}

export default App;
