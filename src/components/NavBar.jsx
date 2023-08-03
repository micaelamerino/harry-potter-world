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
    <nav className="flex gap-4 items-center justify-evenly sm:place-content-end px-6 py-4 border-b">
      <h3>Bienvenido/a {user}</h3>
      <button
        onClick={handleClick}
        className="bg-yellow-600 hover:bg-opacity-80 duration-200 rounded-full px-2 py-1 w-50"
      >
        ↩ Salir 
      </button>
    </nav>
  );
};

export default NavBar;
