import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  const {name, price} = course;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary w-full">Get access</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
