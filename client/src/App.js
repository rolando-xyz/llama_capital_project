import Navigation from "./components/Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Coins</h1>
        <Switch>
          <Route exact path="/">
            <Navigation/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
