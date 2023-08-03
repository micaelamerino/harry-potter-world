import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import Button from "../components/Button";

const Hechizos = () => {
  const { data } = useContext(dataContext);
  const datos = data.hechizos;

  const [hechizos, setHechizos] = useState(datos);
  const [sort, setSort] = useState(false);

  const handleSort = () => {
    setSort(!sort);
    if (sort) {
      setHechizos(datos);
    } else {
      const newArray = [...hechizos].sort((a, b) =>
        a.hechizo.localeCompare(b.hechizo)
      );
      setHechizos(newArray);
    }
  };

  return (
    <section className="p-4">
      <Button />
      <header className="flex flex-col items-center gap-4 mb-5">
        <h1>¡Los mejores hechizos del mágico mundo!</h1>
        <form className="flex items-center">
          <label htmlFor="orden">Ordenar alfabéticamente</label>
          <input
            id="orden"
            className="w-6"
            type="checkbox"
            onChange={handleSort}
            checked={sort}
          />
        </form>
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
            {hechizos &&
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
