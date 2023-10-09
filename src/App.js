import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Search defaultCity="Tokyo" />
      </div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
