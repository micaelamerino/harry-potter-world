import { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../context/DataContext";
import Button from "../components/Button";

const Description = () => {
  const { data } = useContext(dataContext);
  const datos = data.personajes;
  const { id } = useParams();
  const search = datos?.find((p) => p.id === parseInt(id));

  return (
    <div className="m-4">
      {search ? (
        <div className="grid grid-cols-1 place-content-center justify-items-center h-screen">
          <article
            key={search.id}
            className="flex flex-col items-center mb-2"
          >
            <img
              className="w-48 h-56 object-cover mb-3"
              src={search.imagen}
              alt={`Imagen del personaje ${search.personaje}`}
            />
            <div className="flex flex-wrap sm:w-80">
            <h2 className="font-bold text-xl">Información del personaje</h2>
            <h3><b>Nombre del personaje:</b> {search.personaje}</h3>
            <p><b>Interpretado por:</b> {search.interpretado_por}</p>
            <p><b>Casa de Hogwarts:</b> {search.casaDeHogwarts}</p>
            <p><b>Descripción:</b> {search.descripcion}</p>
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

export default Description;
