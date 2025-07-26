import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projetos',
    element: <Projetos />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  );
}

export default App;
