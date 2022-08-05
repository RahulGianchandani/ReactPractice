import React, { useReducer, useContext } from "react";
import { ThemeContext } from "../UseContext";

import CounterBox from "../Components/CounterBox";

const ACTIONS = {
  INC: "inc",
  DEC: "dec",
  RESET: "reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INC:
      return { count: state.count + action.value };
    case ACTIONS.DEC:
      return { count: state.count - action.value };
    case ACTIONS.RESET:
      return { count: (state.count = action.value) };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);


  const theme = useContext(ThemeContext);
  const color = theme.state.theme;

  return (
    <div
      id="redHook"
      className={`h-screen ${color === 'black' ? "bg-black" : "bg-orange-500" }`} 
    >
      <div className="container h-100 py-5">
        <div className="place-items-center h-100 grid">
          <CounterBox
            theme= {color}
            dispatch={dispatch}
            state={state}
            ACTIONS={ACTIONS}
            DEC={ACTIONS.DEC}
            INC={ACTIONS.INC}
          />
        </div>
      </div>
    </div>
  );
};

export default ReducerHook;
