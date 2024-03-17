import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Layout from "./components/pages/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Home />}></Route>
          {/* <Route path="/about/:id" element={<Home />}></Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
