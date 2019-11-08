import React from "react";
import AuthNewItem from "./Components/Auth/AuthNewItem";
import AuthHome from "./Components/Auth/AuthHome";
import AuthMessages from "./Components/Auth/AuthMessages";
import AuthSettings from "./Components/Auth/AuthSettings";
import AuthEditItem from "./Components/Auth/AuthEditItem";
import AuthDetailItem from "./Components/Auth/AuthDetailItem";

export const routes = [
  {
    path: "/home",
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
