import { Link } from "react-router-dom";
import { FaEye, FaStar } from 'react-icons/fa';

const CardCourse = ({ course }) => {
  const { id, name, details, images, category_id, price, ratings } = course;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-40 overflow-hidden"><img src={images[0]} alt="Shoes" /></figure>
      <div className="card-body p-4">
        <h2 className="card-title">{name}</h2>
        <h5>Price: $<span className="font-bold">{price}</span></h5>
        <p>
          {
            details.length > 100 ?
            <>{details.slice(0, 50)}</> :
            details
          }
          ... <Link className="link text-xs" to={`/course-details/${id}`}>Show Details</Link>
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaStar className="text-amber-300" />
            <span>{ratings.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span>{ratings.persons}</span>
          </div>
        </div>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}

export default CardCourse;