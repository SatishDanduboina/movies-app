import React,{useState} from 'react'
import "./Landingpage.css"
import { useNavigate } from 'react-router-dom'
function Signup() {
    const navigate = useNavigate()
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmpassword,setConfirmpassword] = useState("")
function signupformsubmit(e){
     e.preventDefault()
const data ={name,email,password}
if(name != '' && email !='' && password != '' & confirmpassword !='') {
if(password == confirmpassword){
  localStorage.setItem("useraccount",JSON.stringify(data))
  navigate("/login")
  
}else{
    alert("password does not match")
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
       <h2 className="card-title text-center">Register </h2>
        <div className="card-body py-md-4">
         <form onSubmit={signupformsubmit}>
            <div className="form-group">
               <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="form-group">
               <input type="email" className="form-control" id="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                              </div>
                              
                            
     <div className="form-group">
       <input type="password" className="form-control" id="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
     </div>
     <div className="form-group">
        <input type="password" className="form-control" id="confirm-password" placeholder="confirm-password"  
        value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
     </div>
     <div className="d-flex flex-row align-items-center justify-content-between">
        <a href="#"></a>
                                  <button className="btn btn-danger" type='submit'>Create Account</button>
            </div>
         </form>
       </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Signup
