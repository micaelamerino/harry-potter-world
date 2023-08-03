import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("data.json");
        const json = await response.json();
        const data = await json;
        setData(data);
      } catch (error) {
        setMensajeError("No se encontró información intente más tarde por favor")
      }
    };
    getData();
  }, []);

  return (
    <dataContext.Provider value={{ data, user, setUser, mensajeError }}>
      {children}
    </dataContext.Provider>
  );
};
export default DataProvider;
