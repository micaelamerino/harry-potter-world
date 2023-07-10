import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Personajes from "../pages/Personajes";
import Hechizos from "../pages/Hechizos";
import Libros from "../pages/Libros";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Description from "../pages/Description";
import { useState } from "react";
import DataProvider from "../context/DataContext.jsx";

const Routing = () => {
  const [user, setUser] = useState([]);
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/home" element={<Navigate to={"/"} />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/detalles/:id" element={<Details />} />
          <Route path="/hechizos" element={<Hechizos />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/descripcion/:id" element={<Description />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default Routing;
