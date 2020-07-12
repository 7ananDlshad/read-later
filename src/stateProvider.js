import React, { useReducer, createContext } from "react";

const initState = {
  isLoading: false,
  booksList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "SET_BOOKS":
      return { ...state, booksList: action.booksList };
    default:
      throw new Error("Unknow action type", action.type);
  }
}

const AppContext = createContext({});
export default AppContext;

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}
