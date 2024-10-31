import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import SingleFoodPage from './Components/SingleFoodPage.jsx';
import Allfoods from './Pages/Allfoods.jsx';
import AuthProvider from './Auth/Authprovider.jsx';
import Login from './Pages/Auth/Login.jsx';
import Authpage from './Pages/Auth/Authpage.jsx';
import Myprofile from './Pages/Myprofile.jsx';
import AddFoodItem from './Pages/AddFoodItem.jsx';
import Mypostfood from './Pages/Mypostfood.jsx';
import PrivateRoute from './Auth/Privateroute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/food/:_id',
        element:<PrivateRoute>  <SingleFoodPage /></PrivateRoute>
      },
      {
        path: '/allfoods',
        element: <Allfoods />
      },
      {
        path: '/auth',
        element: <Authpage />  // Use Authpage to manage login/register display
      },{
        path:'myprofile',
        element: <PrivateRoute> <Myprofile/></PrivateRoute>
      },{
        path:'add-food-item',
        element:<PrivateRoute> <AddFoodItem/></PrivateRoute>
      }
      ,{
        path:'my-added-food-items',
        element:<PrivateRoute> <Mypostfood/></PrivateRoute>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>

  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
