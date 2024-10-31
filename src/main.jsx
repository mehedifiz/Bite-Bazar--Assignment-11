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
        element: <SingleFoodPage />
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
        element: <Myprofile/>
      },{
        path:'add-food-item',
        element:<AddFoodItem/>
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
