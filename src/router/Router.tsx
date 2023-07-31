import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/views/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NotFound from "@/views/NotFound";
import Movies from "@/views/Movies";
import Template from "@/template/Template";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route
            path="/"
            element={
              <Template>
                <Login />
              </Template>
            }
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/movies" element={<Movies />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
