import { Link, useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div className="flex container mx-auto">
      <div className="">
        {
          courses.map(course => <p><Link className="link" to="">{course.name}</Link></p>)
        }
      </div>
      <div>
        {
          courses.map(course => <Course
            course={course}
            key={course.id}
          />)
        }
      </div>
    </div>
  );
}

export default Courses;
