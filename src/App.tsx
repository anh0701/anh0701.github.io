import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";

function App() {
  return (
    <>
      {/* <HashScroll /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
