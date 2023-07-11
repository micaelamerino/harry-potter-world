import "./Dashboard.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <main className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-2 text-center mt-5 md:mt-0 md:h-screen">
        <Link
          to="/personajes"
          className="font-links text-2xl bg-personajes w-64 h-72 hover:scale-105 inline-block transition-all pt-2"
        >
          Personajes
        </Link>

        <Link
          to="/hechizos"
          className="font-links text-2xl bg-hechizos w-64 h-72 hover:scale-105 inline-block transition-all pt-2"
        >
          Hechizos
        </Link>

        <Link
          to="/libros"
          className="font-links text-2xl bg-libros w-64 h-72 hover:scale-105 inline-block transition-all pt-2"
        >
          Libros
        </Link>
      </main>
    </>
  );
};

export default Dashboard;
