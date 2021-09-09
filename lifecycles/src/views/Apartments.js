import { useEffect, useState } from "react";
import axios from 'axios';
import './Apartments.css'

// import of Components
import ApartmentCard from "../components/ApartmentCard";

const Apartments = () => {
  const apiUrl = "https://ironbnb-m3.herokuapp.com";
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await axios.get(`${apiUrl}/apartments`);
    setApartments(response.data);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Apartments Component</h2>
     
      { apartments.map(apartment => (
        <div key={apartment._id}>
          <ApartmentCard object={apartment} />
        </div>
      ))}  

    </div>
  )
}

export default Apartments;