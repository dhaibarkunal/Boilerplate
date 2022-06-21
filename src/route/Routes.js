import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import React from "react";
import AuthGuard from "./AuthGuard";

//views
const Dashboard = lazy(() => import("../pages/Dashboard"));

function Routes() {
  const views = useRoutes([
    {
      path: "/",
      element: <>Landing page</>,
      children: [],
    },
    {
      path: "/login",
      element: <>Login</>,
      children: [],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "blogs",
          element: <>Blogs</>,
        },
        {
          path: "account",
          element: <AuthGuard>Account</AuthGuard>,
        },
        {
          path: "posts",
          element: <>Posts</>,
        },
      ],
    },
    {
      path: "*",
      element: <>404 - Page not found</>,
      children: [],
    },
  ]);
  return <Suspense fallback={<>Loading...</>}>{views}</Suspense>;
}

export default Routes;
