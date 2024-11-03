
import {
  createBrowserRouter,
} from "react-router-dom";

import React from 'react';
import Main from './Layout/Main';
import Home from './Pages/Home';
import About from './Pages/About';
import Home_2 from "./Pages/Home_2";
import Home_3 from "./Pages/Home_3";
import Services from "./Pages/Services";
import Services_Single from "./Pages/Services_Single";
import Case from "./Pages/Case";
import Case_Single from "./Pages/Case_Single";
import Blog from "./Pages/Blog";
import Blog_2 from "./Pages/Blog_2";
import Blog_single from "./Pages/Blog_single";
import Work_process from "./Pages/Work_process";
import Team from "./Pages/Team";
import Team_single from "./Pages/Team_single";
import Faq from "./Pages/Faq";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/work_process',
        element: <Work_process></Work_process>
      },
      {
        path: '/team',
        element: <Team></Team>
      },
      {
        path: '/team_single',
        element: <Team_single></Team_single>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/error',
        element: <Error></Error>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/service-single',
        element: <Services_Single></Services_Single>
      },
      {
        path: '/case',
        element: <Case></Case>
      },
      {
        path: '/case_single',
        element: <Case_Single></Case_Single>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/blog_2',
        element: <Blog_2></Blog_2>
      },
      {
        path: '/blog_single',
        element: <Blog_single></Blog_single>
      },
      {
        path: '/privacy',
        element: <Privacy></Privacy>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      },
    ]
  },
  {
    path: '/home_2',
    element: <Home_2></Home_2>
  },
  {
    path: '/home_3',
    element: <Home_3></Home_3>
  }
]);
