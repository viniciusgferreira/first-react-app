import { createBrowserRouter } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import App from "./App";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/catalog",
        element: <Catalog />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);
