import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../src/components/Home"
// import Contact from "../src/components/Contact"
//import About from "../src/components/About"

//const Contact = lazy(() => wait(2000).then(() => import("../src/components/Contact")));
const Contact = lazy(()=> import("../src/components/Contact"));
const About = lazy(()=> import("../src/components/About"));

// const wait = time => {
//   return new Promise(resolve => {
//     setTimeout(resolve(), time);
//   })
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //  fallbackElement: <div className="text-blue-500 text-xl">Loading...</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

//React route wraps suspense internally, So we need not handle it.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
