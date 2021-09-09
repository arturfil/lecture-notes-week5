import { useEffect, useState } from "react";
import axios from 'axios';

const SingleApartment = ({match}) => {
  const [apartment, setApartment] = useState({})
  const apiUrl = "https://ironbnb-m3.herokuapp.com";
  const placeHolderLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACBgYF9fX319fXx8fHu7u65ubkdHR2Li4ugoKCtra37+/u2trbk5OTp6eknJyd1dXUTExPc3NxhYWHPz8/IyMhoaGiWlpanp6eKiooYGBiSkpLAwMBNTU3V1dVGRkY1NTU/Pz9VVVWml4coAAAD2klEQVR4nO2d23aqMBBAORZrbUGrR+sNay///4/npWRiM0dIQCSy92PGZLJdrmUmQEgSAAAAAAAAAACAiMj/tE9+a6kzMMQQw9uDIYYY3h5jOE2yZiTTnhsWjYcqMLwNGHqAYSiPjUh35bT26e9QRWLn8/tyqN3vkCe/Evn9VXmwqzDcVQ8RSFeGLxWGL1fL3JXhdva3RH43j6Zttr1a5q4MLbYm2/W0LG5g+GyyPXeRDsMrgGHLDNdwdZy0gPovV2H40kbi46rScJS0QRpgWLW+q8eoI8NxgOG4lcwYYlgXDDEMB8P2DXdZWpKZsNW2u6HhXMH6V9bCZpJiWL/Gl87a0NIjvRj2MFSXJbnSw8J0bmQ40oaWHuo1ktTtHGY4kR5PSnjaiuFUGflJekwwxBBDDAdnuCqmP+zfTN+3fdlYSE0eq6FF3VUbhhhiiCGGkRv6V08Bhl1VT8k4dRhLmZ64UauKb2SYaUNL4kybmImyT4NhXTDEMJzuDd8XJZujCR83pvU9esOq++/y6A0DavxGYHi2als62OvSVyVs7i5tZFgomV+lx0Sb2DVW3gclvG/FcK+MfLANFdhrwxDDi4byOIwgbfEbWkRR42OIIYYYYoghhne2553lCjPrq1TCp1YMT8rI1o9npk3MLAnZa8OwLgM1rHg6L1bD6WldIjeBzk3baRq9YY93ExuBoYChLz5rmsWDw2JtDaWEzaKukWGuZLa++LU2sZA1TdW6dKmEr7fnvZQefasthrBfeu+G+/VbiRQmM9O2lp9krIYWsi69vGq7B8Me1/gYYoghhhhiiGFIbRFg2FVtkcn9g3J7oVUfPrhhrT4MMMyVkR8k8VqbGHveGHozJMMe70Q1AkMBQ18wHJRhlrvnvZ1dx1fCynX8AMOTkvnsOr6S+Rp73lp4kKe3BDxREln19LEpWUnnycq0fkRvaBFFfYghhhhiiCGGGGJ4Z4Y1nyENMOzuGdJXh6U8Up98uuGD8hxwgGFxcIf+lMTHpRsOO72lCUPaL91sSwq56LEuTOsmesMe79M0AkMBQ18wxLAucRjO3Ze1za1TA5R3ucmB5o0MUyWz9Z64TJtYiCF73twFjSGGGPbG0HrDo4b1hsdYDeuDIYYYlmCIIYb/px+G/tXT1+oyX65hZyeWzxSsg8O1sKlTG90x9KgNLT3Si2F2MTCsC4YChr5giGFdMBQw9AVDDOuCoRCroRSX9aunrOKT9XANfw6aMu1fyglX/izMeN+Xxxt9m08qB1z5M5KK+iexWqrfFRjGD4bxg2H8YBg/rayUAAAAAAAAAAAAKvkHoPS1kfl/LuUAAAAASUVORK5CYII="

  useEffect(() => {
    getApartment()
  }, [])

  const getApartment = async () => {
    const id = match.params.id;
    const response = await axios.get(`${apiUrl}/apartments/${id}`);
    setApartment(response.data);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>This is the Single Apartment View</h2>
      <h3>{apartment.title}</h3>
    
      <img style={{width: '500px'}} src={apartment.img} alt="" />
      <p>{apartment.pricePerDay}</p>
    </div>
  )
}

export default SingleApartment;