import "./App.css";

import Home from "./pages";
import { SigninPage } from "./pages/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
      <Home />
    </BrowserRouter>
  );
}

export default App;
