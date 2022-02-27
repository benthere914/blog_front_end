import axios from 'axios'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

const SignUp = ({ setToken }) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signUpFunc = async () => {
        await axios.post('http://blog-env.eba-34uah8ca.us-west-2.elasticbeanstalk.com/auth/signup', {username, email, password});
        const result = await axios.post('http://blog-env.eba-34uah8ca.us-west-2.elasticbeanstalk.com/auth/login', {email, password})
        await setToken(result?.data?.access_token)
    }


    const clickHandler = () => {
        signUpFunc();
        history.push('/');
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
