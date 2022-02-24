import './index.css'
import axios from 'axios'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginFunc = async () => {
        await axios.post('http://127.0.0.1:5000/auth/login', {email, password})
        const loggedin = await axios.get('http://127.0.0.1:5000/auth/logged_in')
    }
    return (
        <>
            <div className='authForm'>
                <Alert>
                    <Alert.Heading>Log In</Alert.Heading>
                        <p>Email</p>
                        <input autoComplete='off' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        <p>password</p>
                        <input autoComplete='off' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                        <br/>
                        <Button onClick={() => {loginFunc()}}>Log In</Button>
                </Alert>
            </div>
        </>
    )
}

export default LogIn
