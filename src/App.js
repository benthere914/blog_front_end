import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path='/' exact={true}>
                    <Home/>
                </Route>
                <Route path={'/other'}>
                    <p>other</p>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
