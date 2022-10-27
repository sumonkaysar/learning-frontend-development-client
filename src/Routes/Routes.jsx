import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<NotFound />}
    >
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/courses"
        loader={() => fetch('https://learning-frontend-development-server.vercel.app/categories')}
        element={<Courses />}
      />
      <Route
        path="/course-details/:id"
        loader={({params}) => fetch(`https://learning-frontend-development-server.vercel.app/course/${params.id}`)}
        element={<CourseDetails />}
      />
      <Route
        path="/checkout/:id"
        loader={({params}) => fetch(`https://learning-frontend-development-server.vercel.app/course/${params.id}`)}
        element={<PrivateRoute><Checkout /></PrivateRoute>}
      />
      <Route
        path="blog"
        element={<Blog />}
      />
      <Route
        path="faq"
        element={<FAQ />}
      />
    </Route>
  )
);

export default routes;