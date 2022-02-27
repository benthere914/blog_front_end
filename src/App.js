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
    const [user, setUser] = useState({})
    const [token, setToken] = useState('');
    const getNewToken = async (oldToken) => {
        const result = await axios.post('http://blog-env.eba-34uah8ca.us-west-2.elasticbeanstalk.com/auth/refresh', {token: oldToken})
        setToken(result?.data?.access_token)
    }
    const getUser = async () => {
        localStorage.setItem('token', token)
        const result = await axios.get('http://blog-env.eba-34uah8ca.us-west-2.elasticbeanstalk.com/users/me', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        setUser(result?.data?.user)
        setLoggedIn(true)
    }

    useEffect(() => {
        if (token) getUser()
    }, [token])

    useEffect(() => {
        const oldToken = localStorage.getItem('token')
        if (!!oldToken) getNewToken(oldToken)
    }, [])



  return (
    <div className="App">
        <BrowserRouter>
            <p>logged in: {loggedIn?"true": "false"}</p>
            <p>{user?.username} {user?.email}</p>
            <NavBar loggedIn={loggedIn}/>
            <Switch>
                <Route path='/' exact={true}>
                    <Home/>
                </Route>
                <Route path={'/auth/signUp'}>
                    <SignUp setToken={setToken}/>
                </Route>
                <Route path={'/auth/login'} >
                    <LogIn setToken={setToken}/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
