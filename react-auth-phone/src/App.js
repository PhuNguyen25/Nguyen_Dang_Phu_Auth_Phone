import Login from "./components/LoginPhone";
import Verify from "./components/VerifiPhone";
import Home from "./components/Home";
import {
  BrowserRouter,
  Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />

          <Route path="/login" component={Login} />

          <Route path="/verify/:number" component={Verify} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
