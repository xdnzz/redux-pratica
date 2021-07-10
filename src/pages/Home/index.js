import React, {useState, useEffect} from 'react';
import api from  '../../services/api'
import './style.css'
import {MdFlightTakeoff} from 'react-icons/md'

export default function Home() {

const [trips, setTrips] = useState([])

useEffect(()=>{

async function loadApi(){
  const response = await api.get('trips');
  setTrips(response.data)

}

loadApi();

}, [])


 return (
   <div>
       <div className="box"> 
          {trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <button type="button" onClick={()=>{}}>
              <div>
                <MdFlightTakeoff syze={16} color="FFF"/>
              </div>
              <span> Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

              Solicitar reserva</button>
            </li>
          ))}
       </div>
   </div>
 );
}