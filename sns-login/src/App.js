import { createBrowserRouter, RouterProvider } from "react-router-dom";

import KakaoRedirect from "./pages/KakaoRedirect";

import SuccessPage from "./pages/Success";
import GitRedirectPage from "./pages/GitRedirect";
import HomePage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/oauth",
    children: [
      { path: "/oauth/kakao", element: <KakaoRedirect /> },
      { path: "/oauth/github", element: <GitRedirectPage /> },
    ],
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
