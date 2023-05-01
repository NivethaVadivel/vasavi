import React,{useState} from 'react'
import axios from "axios"
import './addhotel.css'
export const AddHotel = () => {
  const[hotelname,setHotelName]=useState("");
  const [location, setLocation] = useState("")
  const[distance,setDistance]=useState("")
  const[type,setType]=useState("")
  const[rating,setRating]=useState("")
  const submit=(e)=>{
      e.preventDefault();
      const addHotel=async()=>{
        const response=await axios.post("http://localhost:8000/api/add/hotel",{
            hotel_name:hotelname,
            location:location,
            distance:distance,
            type:type,
            rating:rating
        })
        console.log(response);
      }
      addHotel();
  }
  // return (
  //   <div>
  //       <form onSubmit={submit}>
  //           <label> Name </label>
  //           <input onChange={(e)=>setHotelName(e.target.value)}/>
  //           <label> Address </label>
  //           <input onChange={(e)=>setLocation(e.target.value)}/>
  //           <label> Distance</label>
  //           <input onChange={(e)=>setDistance(e.target.value)}/>
  //           <label> Rating </label>
  //           <input onChange={(e)=>setRating(e.target.value)}/>
  //           <button>Submit</button>
  //       </form>
  //   </div>
  // )
return(
    <div>
      <form onSubmit={submit}>
        
        <h1 className='addhead'>ADD HOTEL</h1>
        
        <fieldset>
          
          <legend><span class="number"></span> Enter the Hotel Details</legend>
          
          <label >Hotel Name:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setHotelName(e.target.value)} name="hotel_name"/>
          
          <label >Address:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setLocation(e.target.value)} name="hotel_email"/>
          
          <label >Distance:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setDistance(e.target.value)} name="user_password"/>
          
          <label for="job">Type:</label>
          <select id="job" name="user_job" onChange={(e)=>setType(e.target.value)}>
          
              <option value="Pure_Veg">Pure Veg</option>
              <option value="Veg_Nonveg">Veg and Non-Veg</option>
          </select>
          <label for="job">Rating:</label>
          <select id="job" name="user_job" onChange={(e)=>setRating(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>          
        </fieldset>
          
        {/* <button type="submit">Sign Up</button> */}
        <button class="button-1" role="button">Add Hotel</button>
        
      </form>
    </div>
  )
}
