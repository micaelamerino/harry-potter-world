import "./Login.css";
import image from "../assets/img-logo.webp";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../context/DataContext";

const Login = () => {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setUser } = useContext(dataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.name === "" || datos.email === "" || datos.password === "") {
      return setError("*Todos los campos son requeridos");
    }
    setUser(datos.name);
    navigate("/dashboard");
  };

  return (
    <div className="login-background h-screen flex flex-col gap-2 items-center place-content-center">
      <header>
        <img className="h-48 w-auto" src={image} alt="Encabezado original referido a 'Harry Potter'"/>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Nombre de usuario"
            autoComplete="on"
            autoFocus
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="off"
          />
          <button>Iniciar sesión</button>
        </form>
        <p className="text-yellow-400 mt-3 font-semibold h-6">{error}</p>
      </main>
    </div>
  );
};

export default Login;
