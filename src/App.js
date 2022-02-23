import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SignUp from './components/signup';
import LogIn from './components/login';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path='/' exact={true}>
                    <Home/>
                </Route>
                <Route path={'/auth/signUp'}>
                    <SignUp/>
                </Route>
                <Route path={'/auth/login'}>
                    <LogIn/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
