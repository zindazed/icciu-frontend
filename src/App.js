import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactPage from "./pages/react";
import * as React from "react";
import { PrimeReactProvider } from "primereact/api";
import IndividualIntervalsExample from "./components/carousel";
import HomePage from "./pages/home";
import HomePage2 from "./pages/home2";
import RegisterPage from "./pages/join";

const router = createBrowserRouter([
  {
    path: "/react",
    element: <ReactPage></ReactPage>,
  },
  {
    path: "/button",
    element: <IndividualIntervalsExample></IndividualIntervalsExample>,
  },
  {
    path: "/home",
    element: <HomePage></HomePage>,
  },
  {
    path: "/",
    element: <HomePage2></HomePage2>,
  },
  {
    path: "/join",
    element: <RegisterPage></RegisterPage>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </React.StrictMode>
  );
}

export default App;
