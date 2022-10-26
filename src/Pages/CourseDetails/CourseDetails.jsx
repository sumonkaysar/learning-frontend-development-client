import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaStar } from 'react-icons/fa'
import { createRef } from "react";
import ReactToPdf from 'react-to-pdf';

const CourseDetails = () => {
  const { id, name, details, images, category_id, price, ratings } = useLoaderData();
  const ref = createRef();

  return (
    <div className="container mx-auto">
      <div className="card bg-base-100 shadow-xl max-w-[900px] mx-auto" ref={ref}>
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
          <button className="btn rounded-b-none" onClick={toPdf}>Download</button>
        )}
    </ReactToPdf>

        <figure className="">
          <div className="carousel w-full">
            {
              images.map((img, index) => <div id={`slide${index}`} key={index} className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index==0? 2 : index - 1}`} className="btn btn-circle">❮</a>
                  <a href={`#slide${index==2? 0 : index + 1}`} className="btn btn-circle">❯</a>
                </div>
              </div>)
            }
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h5>Price: $<span className="font-bold">{price}</span></h5>
          <p>{details}</p>
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
          <Link to={`/checkout/${id}`} className="btn btn-primary">Get premium access</Link>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
