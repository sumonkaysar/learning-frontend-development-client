import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../layout/Root";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
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
        loader={() => fetch('http://localhost:5000/courses')}
        element={<Courses />}
      />
    </Route>
  )
);

export default routes;