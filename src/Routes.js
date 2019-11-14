import React from "react";
import { Route } from "react-router-dom";
import AuthNewItem from "./Components/Auth/AuthNewItem";
import AuthHome from "./Components/Auth/AuthHome";
import AuthMessages from "./Components/Auth/AuthMessages";
import AuthSettings from "./Components/Auth/AuthSettings";
import AuthEditItem from "./Components/Auth/AuthEditItem";
import AuthDetailItem from "./Components/Auth/AuthDetailItem";
import UnAuth from "./Components/UnAuth";
import UnAuthDetailItem from './Components/UnAuthDetailItem';
import Software from './Components/Software';
import Hardware from './Components/Hardware'

//need to change to logged out routes but logged in for now...
export const routes = [
  {
    path: "/",
    exact: true,
    component: AuthHome
  },
  {
    path: '/all',
    exact: true,
    component: UnAuth
  },
  {
    path: "/new",
    exact: true,
    component: AuthNewItem
  },
  {
    path: "/messages",
    exact: true,
    component: AuthMessages
  },
  {
    path: "/settings",
    exact: true,
    component: AuthSettings
  },
  {
    path: "/item/:id",
    exact: true,
    component: AuthDetailItem
  },
  {
    path: '/unauth/item/:id',
    exact: true,
    component: UnAuthDetailItem
  },
  {
    path: "/edit/:id",
    exact: true,
    component: AuthEditItem
  },
  {
    path: '/software',
    exact: true,
    component: Software
  },
  {
    path: '/hardware',
    exact: true,
    component: Hardware
  }
];

//logged in route
// export const LoggedInRoutes =() => {
//   const status = localStorage.getItem('status');
//   const loggedInRoutes =
//   [
//     {
//       path: "/",
//       exact: true,
//       component: AuthHome
//     },
//     {
//       path: "/new",
//       exact: true,
//       component: AuthNewItem
//     },
//     {
//       path: "/messages",
//       exact: true,
//       component: AuthMessages
//     },
//     {
//       path: "/settings",
//       exact: true,
//       component: AuthSettings
//     },
//     {
//       path: "/item/:id",
//       exact: true,
//       component: AuthDetailItem
//     },
//     {
//       path: "/edit/:id",
//       exact: true,
//       component: AuthEditItem
//     }
//   ];

//   return (
//     <>
//     {status === 'loggedIn' && (
//       <>
//       {loggedInRoutes.map((route, i) => (
//         <Route
//         key={`auth_routes_${i}`}
//         path={route.path}
//           exact={route.exact}
//           component={route.component}
//       />
//       ))}
//       </>
//     )}
//     </>
//   )
// }

const Routes = () => {
  return (
    <>
      {/* <LoggedInRoutes /> */}

      {routes.map((route, i) => (
        <Route
          key={`global_routes_${i}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </>
  );
};

export default Routes;
