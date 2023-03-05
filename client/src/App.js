import { Dashboard, Error, Landing, Register } from "../src/Pages/index";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
