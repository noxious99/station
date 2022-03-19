import React, {useState} from 'react'
import "../styles/register.css"
import { Link } from "react-router-dom";
import axios from "axios"; 

function Register() {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterpassword: ""
    })

    const handleChange = e => {
        console.log(e.target)
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterpassword } = user
        if( name && email && password && (password === reEnterpassword)){
           axios.post("http://localhost:9002/register", user)
           .then ( res => console.log(res))
           alert ("posted")
            }
         else {
            alert("invlid input")
        }
        
    }
  return (
      <div className='center'>
    <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name}  placeholder="Enter Your Username" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password}  placeholder="Enter Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterpassword" value={user.reEnterpassword}   placeholder="Re-Enter Your Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>Already have an account?</div>
            <div className="button" ><Link to="/Login" className='link'>Login</Link></div>
        </div>
        </div>
  )
}

export default Register