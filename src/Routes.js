import React from "react";
import { Route } from "react-router-dom";
import AuthNewItem from "./Components/Auth/AuthNewItem";
import AuthHome from "./Components/Auth/AuthHome";
import AuthMessages from "./Components/Auth/AuthMessages";
import AuthSettings from "./Components/Auth/AuthSettings";
import AuthEditItem from "./Components/Auth/AuthEditItem";
import AuthDetailItem from "./Components/Auth/AuthDetailItem";

//Global routes
export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <AuthHome />
  },
  {
    path: "/new",
    exact: true,
    main: () => <AuthNewItem />
  },
  {
    path: "/messages",
    exact: true,
    main: () => <AuthMessages />
  },
  {
    path: "/settings",
    exact: true,
    main: () => <AuthSettings />
  },
  {
    path: "/item/:id",
    exact: true,
    main: () => <AuthDetailItem />
  },
  {
    path: "/edit/:id",
    exact: true,
    main: () => <AuthEditItem />
  }
];

const Routes = () => {
  return (
    <>
      {routes.map((route, i) => (
        <Route
          key={`auth_routes_${i}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </>
  );
};

export default Routes;
