import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { ThemeContext } from "../UseContext";
import { useContext } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [winSize, setWinSize] = useState(window.innerWidth);
  //   document.title = count;

  // const plus = (e) => {  setCount( count + 1) }
  // const minus = (e) => {   setCount( count - 1) }
  // const handleSize = (e) => {
  // }

  //keep updating window size on resizing

  useEffect(() => {
    setWinSize(window.innerWidth);

    setTimeout(() => {
      document.title = `count ${count ? count : ""}`;
    }, 200);

    window.addEventListener("resize", () => {
      setWinSize(window.innerWidth);

      return () => {
        window.removeEventListener("resize", () => {
          setWinSize(window.innerWidth);
        });
      };
    });
  });

//window size will show only after count state is updated
  
// useEffect(() => {
//     setWinSize(window.innerWidth);

//     setTimeout(() => {
//       document.title = `count ${count ? count : ""}`;
//     }, 200);

//     return () => {
//       clearTimeout();
//     }
//   }, [count]);



  const state = useContext(ThemeContext);
  const color = state.state.theme;

  return (
    <div id="Counter " className={`${color === 'black' ? "bg-black" : "bg-secondary" }`}  style={{ height: "100vh" }}>
      <div className="container h-100 py-5">
        <div className="d-flex flex-column h-100 justify-content-center">
          <div className="d-flex  justify-content-center align-items-center align-content-center">
            <BsPlusLg
            size={30}
            color={color === "black" ? "white" : ""}
              onClick={(e) => {
                setTimeout(() => {
                  setCount(count + 1);
                  console.log("count", count);
                }, 200);
              }}
              style={{  verticalAlign: "middle" }}
            />
            {/* {console.log(count)} */}
            <span className="h1 mb-0 mx-4 text-white">{count}</span>
            <AiOutlineMinus
                size={40}
                color={color === "black" ? "white" : ""}
              onClick={(e) => {
                setTimeout(() => {
                  setCount(count - 1);
                  console.log("count", count);
                }, 200);
              }}
              style={{ verticalAlign: "middle" }}
            />
          </div>
          <div className={`text-center mt-5 ${color === "black" ? "text-white" : ""}`}>
            <h1 className="text-xl">Window W-Size is :</h1>
            <h3 className=" text-6xl">{winSize}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
