import { useNavigate } from "react-router-dom";
import results from "../mocks/data.json";

const Hechizos = () => {
  const hechizos = results.hechizos;
  const navigate = useNavigate();

  
  return (
    <section className="p-4">
      <button onClick={() => navigate(-1)}>Volver</button>

      <header className="flex flex-col items-center gap-4 mb-5">
        <h1>¡Los mejores hechizos del mágico mundo!</h1>
        <button className="bg-yellow-600 hover:bg-opacity-80 rounded-full px-2 py-1">
          Ordenar alfabéticamente{" "}
        </button>
      </header>

      <main className="flex place-content-center">
        <table className="border-separate border-spacing-4">
          <thead>
            <tr>
              <th className="border border-yellow-300">Hechizo</th>
              <th className="border border-yellow-300">Uso</th>
            </tr>
          </thead>
          <tbody>
            {hechizos.length > 0 &&
              hechizos?.map((h) => (
                <tr key={h.id}>
                  <td className="border-b border-slate-300 text-yellow-300">
                    {h.hechizo}
                  </td>
                  <td className="border-b border-slate-300">{h.uso}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Hechizos;
