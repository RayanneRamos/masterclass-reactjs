import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Tweet } from "./components/Tweet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Timeline />,
  },
  {
    path: "/tweet",
    element: <Tweet />,
  },
]);
