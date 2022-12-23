import React from "react";
import PropTypes from "prop-types";
import MateriKelas from "components/Dropdowns/MateriKelas";
import MuridDropdown from "components/Dropdowns/MuridDropdown";
import Setting from "components/Dropdowns/SettingPembayaran"
// components


export default function PembayaranAdmin({ color }) {
  return (
    <>



<div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >



<h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Tambah Pembayaran Murid
              </h3>

              <div className="flex content-center items-center justify-center h-full">
             
                    </div>
                    <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      
                    >
                      Informasi Pembayaran
                    </label>
                    <input
                    
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="SPP April"
                    />
                  </div>
                 
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      
                    >
                      Nominal Pembayaran
                    </label>
                    <input
                      
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="120000"
                    />
                  </div>
                
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      
                    >
                      Tanggal Expired
                    </label>
                    <input
                      
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </div>
                  <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    
                    Tambah
                  </button>
              
                  </div>
                  </div>
           





    </>
  );
}

PembayaranAdmin.defaultProps = {
  color: "light",
};

PembayaranAdmin.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
