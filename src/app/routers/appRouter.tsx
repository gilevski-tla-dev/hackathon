import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Products from "../../pages/products/ui/products";

export const AppRouter = () => {
  const routes = createRoutesFromElements(
    <Route>
      <Route path="products" element={<Products />} />
    </Route>
  );

  const router = createHashRouter(routes, {});

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
