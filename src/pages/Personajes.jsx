import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext.jsx";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

const Personajes = () => {
  const { data, mensajeError } = useContext(dataContext);
  const datos = data.personajes;
  const [personajes, setPersonajes] = useState(datos);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search === "") {
      setError("Ingrese una búsqueda");
    } else {
      setError("");
      const newPer = datos.filter((p) =>
        p.personaje.toLowerCase().includes(search.toLowerCase())
      );
      if (newPer.length > 0) {
        setPersonajes(newPer);
      } else {
        setError("No hay resultados");
        setPersonajes([]);
      }
    }
  };

  return personajes ? (
    <section className="p-4">
      <Button />

      <header className="flex flex-col gap-4 items-center mb-5">
        <h1 className="my-4 text-center">Tus personajes favoritos</h1>
        <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap">
          <input
            className="bg-white text-black"
            type="text"
            name="search"
            placeholder="Harry, Voldemort, Albus..."
            value={search}
            autoComplete="on"
            onChange={handleChange}
          />
          <button className="bg-white px-2">Buscar</button>
        </form>
        <p className="text-yellow-400 font-semibold h-6">{error}</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center text-center">
        {personajes?.map((p) => (
          <article key={p.id} className="cursor-pointer">
            <h3 className="mb-2">{p.personaje}</h3>
            <img
              src={p.imagen}
              alt={`Imagen del personaje: ${p.personaje}`}
              loading="lazy"
              className="h-56 w-48 object-cover"
            />
            <button
              onClick={() => navigate(`/descripcion/${p.id}`)}
              className="bg-yellow-600 hover:bg-yellow-500 hover:text-black duration-200 rounded-full px-3 py-1 mt-2"
            >
              Ver más
            </button>
          </article>
        ))}
      </main>
    </section>
  ) : (
    <p>{mensajeError}</p>
  );
};

export default Personajes;
