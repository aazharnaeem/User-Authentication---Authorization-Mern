import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import http from '../utils/Api';

const Home = () => {
    const [data, setData] = useState({})

    const navigate = useNavigate()

    const rem = () => {
        localStorage.removeItem('accessToken')
        navigate('/')
    }
    // const token = localStorage.getItem('accessToken')


    // useEffect(()=>{

    // },[])
    const getdata = () => {
        http.get('/user/check').then(res => {
            if (res) {
                setData(res)
                return;
            }
        })
    }
    return (
        <div>
            <h1>HOME PAGE</h1>

            <br />
            <h2>
                LOGGED IN SUCESSFUL
            </h2>
            <button onClick={getdata}>get data</button>
            <br />
            {
                Object.keys(data).map((value, index) => {
                    return (
                        <div key={index}>
                            <strong>{value}</strong>::
                            {data[value]}
                        </div>
                    )
                })
            }

            <button onClick={rem} >Logout</button>
            <br />



        </div >
    )
};

export default Home;