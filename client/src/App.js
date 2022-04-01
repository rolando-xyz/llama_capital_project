import Navigation from "./components/Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Index from "./views/Index"

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Coins</h1>
        <Switch>
          <Route exact path="/menu">
            <Navigation/>
          </Route>
          <Route exact path="/">
            <Index/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
