import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AppLayout from "./components/Layout/Layout";

const Home = () => <div>upcoming component lib</div>;

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export default Router;
