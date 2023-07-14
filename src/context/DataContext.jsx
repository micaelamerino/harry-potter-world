import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <dataContext.Provider value={{ data, user, setUser }}>{children}</dataContext.Provider>
  );
};
export default DataProvider;
