import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SignUp from './components/signup';
import LogIn from './components/login';
import { useEffect, useState } from 'react';
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const func = async () => {
            const result = await axios.get('http://127.0.0.1:5000/auth/logged_in');
            console.log(result?.data['logged in'])
            await setLoggedIn(result?.data['logged in'])
        }
        func();
    }, [])
  return (
    <div className="App">
        <BrowserRouter>
            <p>logged in: {loggedIn?"true": "false"}</p>
            <NavBar loggedIn={loggedIn}/>
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
