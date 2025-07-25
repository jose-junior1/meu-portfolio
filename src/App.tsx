import { BrowserRouter, Routes } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer/HomeContainer";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <HomeContainer />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
