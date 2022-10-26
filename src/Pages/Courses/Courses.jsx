import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";

const Courses = () => {
  const categories = useLoaderData();
  const [courses, setCourses] = useState([]);
  console.log(courses);

  const loadCourses = (id) => {
    fetch(`http://localhost:5000/category/${id}`)
    .then(res => res.json())
    .then(allCourses => setCourses(allCourses))
    .catch(err => console.error(err));
  }

  const loadCategoryCourses = (id) => {
    loadCourses(id);
  }

  useEffect(() => {
    loadCourses('00');
  }, []);

  return (
    <div className="flex container gap-5 mx-auto max-w-[90%]">
      <div className="flex-shrink">
        {
          categories.map(category => <p key={category.id}>
            <button onClick={() => loadCategoryCourses(category.id)} className="link">{category.name}</button>
          </p>)
        }
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {
          courses &&
          courses.map(course => <Course
            key={course.id}
            course={course}
          />)
        }
      </div>
    </div>
  );
}

export default Courses;
