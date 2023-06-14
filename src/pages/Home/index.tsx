import "./styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../../routes";

export function Home() {
  return <RouterProvider router={router} />;
}
