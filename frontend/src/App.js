import "./App.css";
import List from "./components/list";
import Add from "./components/add";
import Update from "./components/update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
