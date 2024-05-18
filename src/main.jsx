import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/HomePage.jsx';
import CreateSurvey from "./components/CreateSurvey.jsx"
import Survey from './components/Survey.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "",
    element: <Home/>,
  },
  {
    path:"/createSondage",
    element:<CreateSurvey/>,
  },
  {
    path:"/sondages",
    element:<Survey/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
)
