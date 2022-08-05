import React from "react";
import { toast } from "react-toastify";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

const CounterBox = ({ dispatch, state, ACTIONS, DEC, INC, theme }) => {
  console.log(theme);
  return (
    <div className="d-flex  justify-content-center align-items-center align-content-center">
      <div className="d-flex  justify-content-center align-items-center ">
        <BsPlusLg
          color={theme === "black" ? "white" : ""}
          onClick={() => {
            dispatch({ type: ACTIONS.INC, value: 1 });
          }}
          style={{ fontSize: "30px", verticalAlign: "middle" }}
        />
        <span className="h1 mb-0 mx-4 text-white">{state.count}</span>
        <AiOutlineMinus
          color={theme === "black" ? "white" : ""}
          onClick={() => {
            dispatch({ type: ACTIONS.DEC, value: 1 });
          }}
          style={{ fontSize: "40px", verticalAlign: "middle" }}
        />
      </div>
      <button
        className="btn btn-dark "
        onClick={() => {
          dispatch({ type: ACTIONS.RESET, value: 0 });
          toast.success(" 😡 value set to 0", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterBox;
