import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Control() {
  const dsp = useDispatch();
  const inputElement = useRef();

  const handelOnInc = () => {
    dsp({ type: "INCREMENT" });
  };

  const handelOnDec = () => {
    dsp({ type: "DECREMENT" });
  };
  const handelOnAdd = () => {
    dsp({ type: "ADDITION",
    payload:{num: inputElement.current.value}
   });
   inputElement.current.value="";
  };
  const handelOnSub = () => {
    dsp({
      type: "SUBSTRACTION",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value="";

  };
  const handelOnPrivacyToggle=()=>{
    dsp({
      type: "PRIVACY",

    })
  }

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handelOnInc}>
          +1{" "}
        </button>

        <button type="button" className="btn btn-success" onClick={handelOnDec}>
          -1
        </button>

        <button type="button" className="btn btn-warning" onClick={handelOnPrivacyToggle}>
          Privacy-Toggle
        </button>

      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center newctrls">
        <input type="text" placeholder="Enter Number" ref={inputElement} />

        <button type="button" className="btn btn-info" onClick={handelOnAdd}>
          ADD
        </button>

        <button type="button" className="btn btn-info" onClick={handelOnSub}>
          Substract
        </button>

       
      </div>
    </div>
  );
}
