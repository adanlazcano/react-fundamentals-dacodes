import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "@/css/global.scss";
import Router from "@/router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
