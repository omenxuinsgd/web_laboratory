import { lazy, Suspense  } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  const location = useLocation();
  const isAsliPath = location.pathname === "/asli" || location.pathname === "/Login";

  return (
    <Suspense fallback={null}>
      <Styles />
      {!isAsliPath && <Header />}
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      {!isAsliPath && <Footer />}
    </Suspense>
  );
};

export default Router;
