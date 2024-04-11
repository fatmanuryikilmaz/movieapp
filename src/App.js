import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Layout from "./components/pages/Layout.jsx";
import MovieDetail from "./components/pages/MovieDetail.jsx";
import { useEffect } from "react";
import SearchPage from "./components/pages/SearchPage.jsx";
import CategoryPage from "./components/pages/CategoryPage.jsx";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Home />}></Route>
          <Route
            path="/movie-detail/:id/:name"
            element={<MovieDetail />}
          ></Route>
          <Route path="/search/:searchText" element={<SearchPage />}></Route>
          <Route path="/category/:id" element={<CategoryPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
