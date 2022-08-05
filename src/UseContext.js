import { React, createContext, useReducer } from "react";

const ThemeContext = createContext();

const ACTIONS = {
  LIGHT: "white",
  DARK: "black",
};

const initialState = { theme: ACTIONS.LIGHT };

const themeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LIGHT:
      return { theme: ACTIONS.LIGHT };
      case ACTIONS.DARK:
        return { theme :ACTIONS.DARK };
    default:
      return state;
  }
};

const UseContext = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state, dispatch, ACTIONS }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default UseContext;
export { ThemeContext };
