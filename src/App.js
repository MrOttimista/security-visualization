import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components";
import CipherFunctions from "./components/CipherFunctions";
import BlockChain from "./components/BlockChain";
import RSA from "./components/RSA";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/blockChain">
              <BlockChain />
            </Route>
            <Route path="/cipherFunctions">
              <CipherFunctions />
            </Route>
            <Route path="/rsa">
              <RSA />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
