import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
      
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
