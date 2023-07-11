import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import Button from "../components/Button";
const Details = () => {
  const { data } = useContext(dataContext);
  const datos = data.libros;
  const { id } = useParams();
  const search = datos?.find((l) => l.id === id);
  return (
    <div className="m-4">
      {search ? (
        <div className="grid grid-cols-1 place-content-center justify-items-center sm:h-screen">
          <article
            key={search.id}
            className="flex flex-wrap items-center place-content-center mb-2"
          >
            <img
              className="w-64 h-80 object-contain"
              src={search.imagen}
              alt={`Imagen del libro ${search.titulo}`}
            />
            <div className="flex flex-col flex-wrap sm:w-80 mt-2">
              <h3>Titulo: {search.titulo}</h3>
              <h2>Titulo original: {search.titulo_original}</h2>
              <p>Año de lanzamiento: {search.lanzamiento}</p>
              <p>Autora: {search.autora}</p>
              <p>Descripción: {search.descripcion}</p>
            </div>
          </article>
          <Button />
        </div>
      ) : (
        <div>
          <h3>No se encontró información, vuelva a intentar</h3>
          <Button />
        </div>
      )}
    </div>
  );
};

export default Details;
