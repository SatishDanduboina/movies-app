import React,{useState} from 'react'
import "./Landingpage.css"
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
const data = JSON.parse(localStorage.getItem("useraccount"))
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function signupformsubmit(e){
     e.preventDefault()
if(email !='' && password !=''){
if(data?.email && data?.password){
navigate("/home")
}else{
    alert("paswword and email does not match")
}

}else{
    alert("please fill all required fields")
}
}
  return (
    <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-5">
     <div className="card">
       <h2 className="card-title text-center">LOGIN</h2>
        <div className="card-body py-md-4">
         <form onSubmit={signupformsubmit}>
            
          <div className="form-group">
               <input type="email" className="form-control" id="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                              </div>
                              
                            
     <div className="form-group">
       <input type="password" className="form-control" id="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
     </div>
   
     <div className="d-flex flex-row align-items-center justify-content-between">
        <a href="#"></a>
                                  <button className="btn btn-danger" type='submit'>Login</button>
            </div>
         </form>
       </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Login
