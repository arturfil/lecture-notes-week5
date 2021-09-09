const ApartmentCard = ({object: {title, img, pricePerDay}}) => {


  return (
    <div style={{border: '1px solid lightgrey', padding: '10px', width: '400px', margin: '10px auto'}}>
      <h3>{title}</h3>
      <img style={{width: '200px'}} src={img} alt="" srcset="" />
      <p>{pricePerDay}</p>
    </div>
  )
}

export default ApartmentCard