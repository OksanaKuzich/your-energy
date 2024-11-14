import { GlobalStyle } from "./utiles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const MyCompHome = lazy(() => import("./pages/HomePage/HomePage"));
const MyCompLogin = lazy(() => import("./pages/LoginPage/LoginPage"));
const MyCompFavorites = lazy(() =>
  import("./pages/FavoritesPage/FavoritesPage")
);
const MyCompNotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<MyCompHome />} />
        <Route path="/login" element={<MyCompLogin />} />
        <Route path="/favorites" element={<MyCompFavorites />} />
        <Route path="*" element={<MyCompNotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
