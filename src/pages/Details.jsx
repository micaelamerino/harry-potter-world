import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
const Details = () => {
  const { data } = useContext(dataContext);
  const datos = data.libros;
  const { id } = useParams();
  const search = datos?.find((l) => l.id === id);
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Volver</button>
      <div className="grid grid-cols-1 place-content-center justify-items-center h-screen">
        {search ? (
          <article
            key={search.id}
            className="flex flex-wrap items-center place-content-center"
          >
            <img
              className="w-64 h-80 object-contain"
              src={search.imagen}
              alt={`Imagen del libro ${search.titulo}`}
            />
            <div className="w-80">
              <h3>Titulo: {search.titulo}</h3>
              <h2>Titulo original: {search.titulo_original}</h2>
              <p>Año de lanzamiento: {search.lanzamiento}</p>
              <p>Autora: {search.autora}</p>
              <p>Descripción: {search.descripcion}</p>
            </div>
          </article>
        ) : (
          <h3>No se encontró información, vuelva a intentar</h3>
        )}
      </div>
    </>
  );
};

export default Details;
