/** all direct imports from react env */

import { Route, Routes } from "react-router-dom";

/** all component imports */
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Details from "./components/Details";
/** all css imports */
import "./App.css";

//JSX
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id/" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
