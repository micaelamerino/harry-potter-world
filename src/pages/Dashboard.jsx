import "./Dashboard.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <main className="mb-5">
        <h1 className="text-center mt-5 md:mt-20">Seleccione una categoría</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-3 text-center mt-5 md:mt-28">
        <Link
          to="/personajes"
          className="animate-fade-in text-2xl bg-personajes w-64 h-72 hover:scale-105 inline-block transition-all pt-2"
        >
          Personajes
        </Link>

        <Link
          to="/hechizos"
          className="animate-fade-in text-2xl bg-hechizos w-64 h-72 hover:scale-105 inline-block transition-all pt-2"
        >
          Hechizos
        </Link>

        <Link
          to="/libros"
          className="animate-fade-in text-2xl bg-libros w-64 h-72 hover:scale-105 inline-block transition-all pt-2"
        >
          Libros
        </Link>
        </div>

       
      </main>
    </>
  );
};

export default Dashboard;
