import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Body from "./components/Body";
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import { lazy } from 'react';
import { Suspense } from 'react';

const AppRouter = () => {

  const About = lazy(() => import("./classes/AboutClass"))

  const routerApp = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <Suspense fallback={<h1 className="text-3xl font-bold">Loading...</h1>}><About /></Suspense>
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />
        },
        {
          path: "/cart",
          element: <Cart />
        },
      ],
      errorElement: <Error />
    },
  ])

  return (
    <div>
      <RouterProvider router={routerApp} />
    </div>
  )
}

export default AppRouter;