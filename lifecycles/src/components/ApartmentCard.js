import { Link } from "react-router-dom";

const ApartmentCard = ({ object: { title, img, pricePerDay, _id } }) => {
  return (
    <div
      style={{
        border: "1px solid lightgrey",
        padding: "10px",
        width: "400px",
        margin: "10px auto",
      }}
    >
      <h3>{title}</h3>
      <img style={{ width: "200px" }} src={img} alt="" />
      <p>{pricePerDay}</p>

      <button>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/apartments/${_id}`}
        >
          View Apartment
        </Link>
      </button>
    </div>
  );
};

export default ApartmentCard;
