import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Acceuil from "./components/Acceuil";
import User from "./components/User";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/user" element={<User />}></Route>
        <Route path="acceuil" element={<Acceuil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
