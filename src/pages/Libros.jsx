import results from "../mocks/data.json";
import { useNavigate } from "react-router-dom";

const Libros = () => {
  const libros = results.libros;
  const navigate = useNavigate();

  return (
    <section className="p-4">
      <button onClick={() => navigate(-1)}>Volver</button>
      <header className="text-center mb-5"><h1>Historias increibles</h1></header>
      
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
        {libros.length > 0 &&
          libros?.map((l) => (
            <article key={l.id} className="flex flex-col items-center gap-3">
              <h3>{l.titulo}</h3>
              <img
                src={l.imagen}
                alt={`Portada del libro ${l.titulo}`}
                className="h-72 object-contain"
              />
              <button 
              onClick={()=>navigate(`/detalles/${l.id}`)}
              className="bg-yellow-600 hover:bg-opacity-80 rounded-full px-2 py-1">
                INFORMACIÓN
              </button>
            </article>
          ))}
      </main>
    </section>
  );
};

export default Libros;
