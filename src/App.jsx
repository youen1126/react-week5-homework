import { RouterProvider } from "react-router";
import { router } from "./router";

import "./assets/style.css";
import "./styles/main.scss"; // 入口 Sass
import MessageToast from "./components/MessageToast";

export default function App() {
  return (
    <>
      <MessageToast />
      <RouterProvider router={router} />
    </>
  );
}
