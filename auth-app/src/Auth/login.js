import React, { useState } from 'react'
import http from '../utils/Api'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault()
        const data = { username, password }
        const path = '/user/login'
        http.post(path, data).then((res) => {
            if (res) {
                localStorage.setItem('accessToken', res.token);
                navigate('/home');
            }

        })

    }
    return (
        <div>

            <h2>Login</h2>
            <form onSubmit={Submit} style={{ display: 'inline-grid' }}>
                <label>username</label>
                <input type='text' placeholder='username or email' name='username' onChange={(e) => setUsername(e.target.value)} />
                <label>username</label>
                <input type='password' placeholder='password' name='password' onChange={(e) => setpassword(e.target.value)} />
                <input type='submit' value='submit' />
            </form>
            <p>Don't have an account ? <Link to='/signup'>create One</Link></p>
        </div>
    )
}

export default Login;