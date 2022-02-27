import './index.css'
import axios from 'axios'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const LogIn = ({setToken}) => {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginFunc = async () => {
        const result = await axios.post('http://blog-env.eba-34uah8ca.us-west-2.elasticbeanstalk.com/auth/login', {email, password})
        setToken(result?.data?.access_token)
        history.push('/')
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
