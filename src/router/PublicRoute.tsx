import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "@/utilities/userSession";


function PublicRoute(): JSX.Element {

  if (!isAuthenticated()) return <Outlet />;
  return <Navigate to={"/"} />;
}
PublicRoute.displayName = "PublicRoute";
export default PublicRoute;
