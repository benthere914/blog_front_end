import axios from 'axios'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import './index.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const signUpFunc = async () => {
        await axios.post('http://127.0.0.1:5000/auth/signup', {username, email, password});
    }

    const loginFunc = async () => {
        await axios.post('http://127.0.0.1:5000/auth/login', {email, password})
    }
    const clickHandler = () => {
        console.log('got here')
        if (password !== confirmPassword) {
            // show user error
            return
        }

        signUpFunc();
        loginFunc();

    }
    return (
        <>
            <div className='authForm'>
                <Alert>
                    <Alert.Heading>Sign Up</Alert.Heading>
                        <p>Email</p>
                        <input autoComplete='off' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        <p>username</p>
                        <input autoComplete='off' value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                        <p>password</p>
                        <input autoComplete='off' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                        <p>confirm password</p>
                        <input type='password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}></input>
                        <br/>
                        <Button onClick={clickHandler}>Sign Up</Button>
                </Alert>
            </div>
        </>
    )
}

export default SignUp
