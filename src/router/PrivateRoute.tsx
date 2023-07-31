import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "@/utilities/userSession";
import Template from "@/template/Template";

function PrivateRoute(): JSX.Element {
  if (isAuthenticated())
    return (
      <Template>
        <Outlet />
      </Template>
    );
  return <Navigate to={"/"} />;
}
PrivateRoute.displayName = "PrivateRoute";
export default PrivateRoute;
