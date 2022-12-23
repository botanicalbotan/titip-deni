import React from "react";
import PropTypes from "prop-types";

// components

import MateriKelas from "components/Dropdowns/MateriKelas";
import BabDropdown from "components/Dropdowns/BabDropdown";
import Materi from "components/Dropdowns/DaftarTema";
export default function InputSemester({ color }) {
  return (
    <>
   
   <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >

   
    <BabDropdown/>
     <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      
                    >
                    Judul Materi
                    </label>
                    <input
                    
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />  
                      <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      
                    >
                     File
                    </label>
                    <label
  class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
  <i class="fas fa-cloud-upload-alt fa-3x"></i>
  <span class="mt-2 text-base leading-normal">Pilih File</span>
  <input type='file' class="hidden" />
</label>
                  </div>
                  <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    
                    Upload Materi
                  </button>
            </div>

      
      
    </>
  );
}

InputSemester.defaultProps = {
  color: "light",
};

InputSemester.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
