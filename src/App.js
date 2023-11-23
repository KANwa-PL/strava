import "./App.css";
import Home from "./pages/home";
import Redirect from "./pages/redirect";
import Main from "./pages/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="redirect/*" element={<Redirect />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
