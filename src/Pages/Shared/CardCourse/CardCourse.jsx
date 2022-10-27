import { Link } from "react-router-dom";
import { FaEye, FaStar } from 'react-icons/fa';

const CardCourse = ({ course }) => {
  const { id, name, details, images, category_id, price, ratings } = course;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-40 overflow-hidden"><img src={images[0]} alt="course" /></figure>
      <div className="card-body p-4">
        <h2 className="card-title">{name}</h2>
        <h5>Price: $<span className="font-bold">{price}</span></h5>
        <p>
          {
            details.length > 100 ?
            <>{details.slice(0, 50)}</> :
            details
          }
          ... <Link className="link text-xs" to={`/course-details/${id}`}>Show More</Link>
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
        <Link to={`/course-details/${id}`} className="btn btn-primary">Details</Link>
      </div>
    </div>
  );
}

export default CardCourse;
