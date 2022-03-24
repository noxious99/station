import React, {useState} from 'react'
import { Link, useHistory} from 'react-router-dom';
import "../styles/login.css";
import axios from "axios";

const Login = ({ updateUser}) => {

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
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
          updateUser(res.data.user)
          useHistory.push("/")
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