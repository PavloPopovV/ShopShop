import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constantes/routes";
import App from "./containers/App";
import ProtectedRoute from "./components/ProtectedaRoute";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Favourite from "./pages/Favourite";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.CART,
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']} navigateTo={ROUTES.AUTH}>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.FAVOURITE,
        element: (
          <ProtectedRoute allowedRoles={['ADMIN', 'USER']} navigateTo={ROUTES.AUTH}>
            <Favourite />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.CATEGORY,
        element: <Category />,
      },
      {
        path: ROUTES.PRODUCT,
        element: <Product />,
      },
      {
        path: ROUTES.AUTH,
        element: (
          <ProtectedRoute allowedRoles={['GUEST']} navigateTo={ROUTES.HOME}>
            <Auth />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.ADMIN,
        element: (
          <ProtectedRoute allowedRoles={['ADMIN']} navigateTo={ROUTES.AUTH}>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
