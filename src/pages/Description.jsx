import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../context/DataContext";

const Description = () => {
  const { data } = useContext(dataContext);
  const datos = data.personajes;
  const { id } = useParams();
  const search = datos?.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>Volver</button>
      <div className="grid grid-cols-1 place-content-center justify-items-center h-screen">
        {search ? (
          <article
            key={search.id}
            className="flex flex-col w-80 text-center items-center"
          >
            <img
              className="w-48 h-56 object-cover mb-3"
              src={search.imagen}
              alt={`Imagen del personaje ${search.personaje}`}
            />
            <h3>Nombre del personaje: {search.personaje}</h3>
            <p>Interpretado por: {search.interpretado_por}</p>
            <p>Casa de Hogwarts: {search.casaDeHogwarts}</p>
            <p>Descripción: {search.descripcion}</p>
          </article>
        ) : (
          <h3>No se encontró información, vuelva a intentar</h3>
        )}
      </div>
    </>
  );
};

export default Description;
