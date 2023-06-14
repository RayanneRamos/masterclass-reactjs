import { Sidebar } from "../../components/Sidebar";
import "./styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../../routes";

export function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
