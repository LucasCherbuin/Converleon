import React from "react";
import ConvertAPI from "convertapi"


export default function ButtonConvert(){
    const handleConvert = async (e) => {
        e.preventDefault();
    }

    return (
        <button id="convertBtn" onClick={handleConvert}>
      convertir
        </button>
    )
}