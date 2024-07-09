import React, { useContext, useState } from "react";
import UserContext from "../contex/UserContext";

function Login(){
    const [username,setUsername] = useState('')  // we declear to set username and password.
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)   //in setUser we gives values.

const handleSubmit = (e)=>{
    e.preventDefault();
    setUser({username,password})  // on submit button usename and password goes to the setUser.
}
return(
    <div>
    <h2>Login</h2>
    <input type='text'
    value={username} // value in login is usename intially it is empty.
    onChange={(e) => setUsername(e.target.value) }  // any change in Login change in call the setUsername and set that chnged name. similarly in password.
    placeholder='username'  />
    {" "}
    <input type='text' 
    value={password}
    onChange={(e) => setPassword(e.target.value) }
    placeholder='password'  />
    <button onClick={handleSubmit}>Submit</button>
</div>
)
}

export default Login