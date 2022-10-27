import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CardCourse from "../Shared/CardCourse/CardCourse";

const Courses = () => {
  const categories = useLoaderData();
  const [courses, setCourses] = useState([]);

  // function Load courses by categories id
  const loadCourses = (id) => {
    fetch(`https://learning-frontend-development-server.vercel.app/category/${id}`)
    .then(res => res.json())
    .then(allCourses => setCourses(allCourses))
    .catch(err => console.error(err));
  }

  // Load courses by categories
  const loadCategoryCourses = (id) => {
    loadCourses(id);
  }

  // Load all courses by default
  useEffect(() => {
    loadCourses('00');
  }, []);

  return (
    <div className="container mx-auto">
      <div className="md:flex gap-5 mx-auto max-w-[90%]">
      <div className="flex-shrink mb-7">
        <h3 className="text-3xl font-bold">Categories</h3>
        {
          categories.map(category => <p key={category.id}>
            <button onClick={() => loadCategoryCourses(category.id)} className="link">{category.name}</button>
          </p>)
        }
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {
          courses &&
          courses.map(course => <CardCourse
            key={course.id}
            course={course}
          />)
        }
      </div>
    </div>
    </div>
  );
}

export default Courses;
