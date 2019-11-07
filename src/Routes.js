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
    main: () => <AuthHome />
  },
  {
    path: "/new",
    main: () => <AuthNewItem />
  },
  {
    path: "/messages",
    main: () => <AuthMessages />
  },
  {
    path: "/settings",
    main: () => <AuthSettings />
  },
  {
    path: "/item/:id",
    main: () => <AuthDetailItem />
  },
  {
    path: "/edit/:id",
    main: () => <AuthEditItem />
  }
];
