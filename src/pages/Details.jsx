import { useNavigate, useParams } from "react-router-dom";
import results from "../mocks/data.json";
const Details = () => {
  const datos = results.libros;
  const { id } = useParams();
  const search = datos.find((l) => l.id === id);
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Volver</button>
      <div>
        {search ? (
          <article key={search.id}>
            <img
              src={search.imagen}
              alt={`Imagen del libro ${search.titulo}`}
            />
            <h3>Titulo: {search.titulo}</h3>
            <h2>Titulo original: {search.titulo_original}</h2>
            <p>Año de lanzamiento: {search.lanzamiento}</p>
            <p>Autora: {search.autora}</p>
            <p>Descripción: {search.descripcion}</p>
          </article>
        ) : (
          <h3>No se encontró información, vuelva a intentar</h3>
        )}
      </div>
    </>
  );
};

export default Details;
