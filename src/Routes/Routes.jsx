import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";

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
    </Route>
  )
);

export default routes;