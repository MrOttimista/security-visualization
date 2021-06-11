import { Route, Router, Switch } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
      
            <Route path="/">
              <h1>fefe</h1>
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
