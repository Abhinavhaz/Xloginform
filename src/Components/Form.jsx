import React from "react";
import { useState } from "react";

function Xlogin(){
const [username, setUsername] = useState('')
const [password, setpassword] = useState('')
const [istrue ,setIstrue] = useState(false)
const[error ,setError] = useState("")


const handlesubmit= (e)=>{
e.preventDefault()
if(username==="user" && password=== "password"){
setError("")
setIstrue(true)
}else{
    setError("Invalid username or password")
    setIstrue(false)
}

}




return(
    <div>

<h1> Login Page</h1>
{istrue ? (<>
<p>Welcome, user!</p>
</>):(

<form onSubmit={handlesubmit}>
{error && <p> {error}</p> }

<div>
<label>
Username:
</label>

<input  
value={username}
onChange={(e)=>setUsername(e.target.value)}
placeholder="Enter Username"
type="text"
required
/>
</div>



<div>
<label>
Password:
</label>

<input
value={password}
onChange={(e)=>setpassword(e.target.value)}
type="password"
placeholder="Enter password" 
required
/>
</div>


<div>
<button type="submit">Submit</button>

</div>

</form>)}

    </div>
)
}
export default Xlogin