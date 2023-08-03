import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("data.json");
      const json = await response.json();
      const data = await json;
      setData(data);
    };
    getData();
  }, []);

  return (
    <dataContext.Provider value={{ data, user, setUser }}>
      {children}
    </dataContext.Provider>
  );
};
export default DataProvider;
