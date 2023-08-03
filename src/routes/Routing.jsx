import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Personajes from "../pages/Personajes";
import Hechizos from "../pages/Hechizos";
import Libros from "../pages/Libros";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Description from "../pages/Description";
import DataProvider from "../context/DataContext.jsx";

const Routing = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/detalles/:id" element={<Details />} />
          <Route path="/hechizos" element={<Hechizos />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/descripcion/:id" element={<Description />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default Routing;
