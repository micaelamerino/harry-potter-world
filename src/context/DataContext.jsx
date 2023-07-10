import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  );
};
export default DataProvider;
