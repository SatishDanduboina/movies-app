import React from 'react'
import "./Landingpage.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
<div className='movie-background' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
  <h1 style={{ color: 'white', fontFamily: 'fantasy', letterSpacing: '0.1rem',marginBottom:"30px"}}>BROWSE AND SEE YOUR FAVOURITE MOVIES</h1>
  <div style={{ display: 'flex' }}>
    <Link to='/signup'>
  <Button variant="primary" style={{marginRight:"30px",padding:"10px 30px 10px 30px",fontWeight:"bold"}}>SIGN UP</Button></Link>
  <Link to='/login'>
  <Button variant="danger" style={{marginRight:"30px",padding:"10px 30px 10px 30px",fontWeight:"bold"}}>LOG IN</Button></Link>
  </div>
</div>

  )  
}

export default Landingpage
