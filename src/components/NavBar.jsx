import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../context/DataContext";

const NavBar = () => {
  const { user } = useContext(dataContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav className="flex place-content-end gap-4 items-center px-6 py-4 border-b">
      <h3>Bienvenido/a {user}</h3>
      <button
        onClick={handleClick}
        className="bg-yellow-600 hover:bg-opacity-80 rounded-full px-2 py-1"
      >
        Cerrar sesión
      </button>
    </nav>
  );
};

export default NavBar;
