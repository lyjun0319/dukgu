import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

import "./libs/styles/style.scss"
import Portfolio from "./page/portfolio/portfolio";
import Main from "./page/main";
import My from "./page/my/my";
import PortfolioWrite from "./page/portfolio/portfolio.write";
import isAdmin from "./components/auth/isAdmin";
import IsAdmin from "./components/auth/isAdmin";
import PortfolioDetail from "./page/portfolio/portfolio.detail";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children :[
    {
      path: "/",
      element: <Main />,
      errorElement: "",
    },
    {
      path: "/my",
      element: <My />,
      errorElement: "",
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
      errorElement: "",
    },
    {
      path: "/portfolio/:id",
      element: <PortfolioDetail />,
      errorElement: "",
    },
    {
      path: "/portfolioWrite",
      element:
        <IsAdmin>
          <PortfolioWrite />
        </IsAdmin>,
      errorElement: "",
    }
  ]
}]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
