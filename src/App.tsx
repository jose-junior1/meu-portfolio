import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  );
}

function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projetos', element: <Projetos /> },
    ],
  },
]);

export default App;
