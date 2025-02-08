import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Project from "./Components/Project";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar"; 
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Navbar />
        <Service />
      </>
    ),
  },
  {
    path: "/project",
    element: (
      <>
        <Navbar />
        <Project />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
