import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Moviedetails() {
    const navigate = useNavigate()
    const usersdata = JSON.parse(localStorage.getItem("useraccount"))
    console.log("userdata",usersdata)
  const { id } = useParams();
  const [moviedetails, setMoviedetails] = useState(null);
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [tickets,setTickets] = useState('')
  const [formData, setFormData] = useState({
    movieName: '',
   
  });

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all")
      .then(res => setMoviedetails(res.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (moviedetails) {
      const foundImage = moviedetails.find(item => item.show.id == id);
      setImage(foundImage);
    }
  }, [moviedetails, id]);

  const handleBookTicket = () => {
    setFormData({
      movieName: image?.show?.name || '',
 });
    setShowForm(true);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if(tickets != '' && tickets == 0){
    setShowForm(false);
    setTickets("")
    alert("Tickets Booked Sucessfully")
    navigate("/home")
    }else{
        alert("Please select how many tickets")
    }
  };

  return (
    <div>
      
      {usersdata && image && (
        <>
          <img src={image.show?.image?.medium} alt={image.show?.name}  />
          <h2>{image.show?.name}</h2>
         
          <Button variant="danger" style={{marginRight:"30px",padding:"10px 30px 10px 30px",fontWeight:"bold",marginBottom:"10px"}} 
          onClick={handleBookTicket}>Book Now</Button>
        </>
      )}
      {showForm && (
        <form onSubmit={handleSubmitForm}>
          <h6>Book Ticket - {formData.movieName}</h6>
          <h6 className="type">
          Genere-
  {image.show.genres.map((genre, index) => (
    <React.Fragment  key={genre}>
    <span>{genre}</span>
      {index !== image.show.genres.length - 1 && <span>,</span>}
    </React.Fragment>
  ))}
</h6>
          <h6>Runtime - {image?.show?.averageRuntime} min</h6>
          <input
  type="number"
  placeholder="no.of tickets"
  className="rounded"
  value={tickets}
  onChange={(e) => {
    const input = parseInt(e.target.value);
    if (input >= 0 && input <= 6) {
      setTickets(input);
    } else if (input > 6) {
      setTickets(6);
    } else {
      setTickets(0); 
    }
  }}
/>


         <div>
         <Button variant="primary" style={{marginTop:"20px"}} type='submit'>SUBMIT</Button>
          </div>
        </form>
      )}
      {!usersdata && <h1>PLEASE <Link to="/signup"><button className='btn btn-primary fw-bold'>SIGNUP</button></Link></h1>}
    </div>
  );
}

export default Moviedetails;
