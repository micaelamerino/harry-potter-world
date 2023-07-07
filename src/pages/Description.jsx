import { useNavigate, useParams } from "react-router-dom";
import results from "../mocks/data.json";
const Description = () => {
  const datos = results.personajes;
  const { id } = useParams();
  const search = datos.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <>
    <button onClick={()=>navigate(-1)}>Volver</button>
    <div>
      {search ? (
        <article key={search.id}>
          <img
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
