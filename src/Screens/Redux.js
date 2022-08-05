import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

const Redux = () => {
  return (
    <div id="Counter " className={` bg-secondary min-h-screen`} >
    <div className="container h-screen py-5">
      <div className="d-flex flex-column h-100 justify-content-center">
        <div className="d-flex justify-content-center align-items-center align-content-center">
          <BsPlusLg
          size={30}
          color={"black" }
            style={{  verticalAlign: "middle" }}
          />
          {/* {console.log(count)} */}
          <span className="h1 mb-0 mx-4 text-white">{}</span>
          <AiOutlineMinus
              size={40}
              color={"black"}
            style={{ verticalAlign: "middle" }}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Redux;
