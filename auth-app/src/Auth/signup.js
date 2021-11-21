import React, { useState } from 'react'
import http from '../utils/Api'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


const Signup = () => {

    const [data, setData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        ConfirmPassword: ''
    })

    const navigate = useNavigate()
    const HandleChange = (e) => {

        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })

    }

    const Submit = (e) => {
        e.preventDefault()
        if (data.password !== data.ConfirmPassword) {
            return alert('passwrod not same')
        }
        const path = '/user/register'
        http.post(path, data).then((res) => {
            // if (res) {
                navigate('/')
            // }
        })

    }


    return (
        <div>
            <br />
            <br />
            <br />
            <h2>Signup</h2>
            <form onSubmit={Submit} style={{ display: 'inline-grid' }} >
                <label>username</label>
                <input type='text' placeholder='username or email' name='username' value={data.username} onChange={HandleChange} />


                <label>firstname</label>
                <input type='text' placeholder='firstName' name='firstName' value={data.firstName} onChange={HandleChange} />

                <label>lastName</label>
                <input type='lastName' placeholder='lastName' name='lastName' value={data.lastName} onChange={HandleChange} />

                <label>email</label>
                <input type='email' placeholder='email' name='email' value={data.email} onChange={HandleChange} />
                <label>password</label>
                <input type='password' placeholder='password' name='password' value={data.password} onChange={HandleChange} />

                <label>Confirm password</label>
                <input type='password' placeholder='ConfirmPassword' name='ConfirmPassword' value={data.ConfirmPassword} onChange={HandleChange} />


                <input type='submit' value='submit' />
            </form>
            <p>already have an account? <Link to='/' >Signup</Link></p>
        </div>
    )
}

export default Signup;