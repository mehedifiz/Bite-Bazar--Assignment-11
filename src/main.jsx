import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import SingleFoodPage from './Components/SingleFoodPage.jsx';
import Allfoods from './Pages/Allfoods.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/food/:id',
       
        element: <SingleFoodPage/>
      },
      {
        path:'/allfoods',
        element: <Allfoods/>
      }
        
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
