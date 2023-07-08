import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
