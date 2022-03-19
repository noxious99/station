import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "../styles/login.css";
import axios from "axios"

function Login() {

  const [ user, setUser] = useState({
    email:"",
    password:"",
})

const handleChange = e => {
    console.log(e.target)
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const login = () => {
  axios.post("http://localhost:9002/login", user)
  .then(res => {
      alert(res.data.message)
  })
}
  
  return (
    <div className='center'>
    <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password}  placeholder="Enter Your Password" onChange={ handleChange }></input>
            <div className="button" onClick={login} >Login</div>
            <div>Don't have an account?</div>
            <div className="button" >
            <Link to="/Register" className='link'>Register</Link>
            </div>
        </div>
        </div>
  )
}

export default Login