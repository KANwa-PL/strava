import "./App.css";
import Home from "./pages/home";
import Redirect from "./pages/redirect";
import Main from "./pages/main";
import New from "./pages/new";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="redirect/*" element={<Redirect />} />
        <Route path="main" element={<Main />} />
        <Route path="new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
