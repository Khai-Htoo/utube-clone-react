import { useEffect, useState } from "react";
import { createContext } from "react";
import { fetchData } from "../utils/api";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [searchResult, setSearchResult] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const getSelectedCat = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      setSearchResult(contents);
      setLoading(false);
      console.log(searchResult);
    });
  };
  useEffect(() => {
    getSelectedCat(selectCategories);
  }, [selectCategories]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        selectCategories,
        setSelectCategories,
        searchResult,
        setSearchResult,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
