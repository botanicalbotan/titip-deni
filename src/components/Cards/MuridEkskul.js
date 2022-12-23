import React from "react";
import PropTypes from "prop-types";

// components

import MateriKelas from "components/Dropdowns/MateriKelas";
import MuridDropdown from "components/Dropdowns/MuridDropdown";
export default function Murid({ color }) {
  return (
    <>
<div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Daftar Nurid
              </h3>
         
              
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Nama
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  NISN
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Alamat
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  No. Kontak
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Presentasi Absensi
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Denny
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  12121
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                
                  Solo
                
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 0821141223
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  100%
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Pengaturan
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
      





  
     

    <div
        className={
          "flex space-x-4 h-36 " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
 <div class="flex-1 bg-blue-300">
 <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex-1  flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            
            <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Tambah Murid
              </h3>
              <div className="flex content-center items-center justify-center h-full">
             
                    </div>
                    <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      
                    >
                      Nama Murid
                    </label>
                   <MuridDropdown/>
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
                  </div>
   </div>
 </div>
 <div class="flex-1 bg-blue-300">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex-1  flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <div className="flex content-center items-center justify-center h-full">
            <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Hapus Materi
              </h3>
           
              </div>
                    
                    </div>

                      <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          
                        >
                         Nama
                        </label>
                        <MuridDropdown />
                        <div className="btn-wrapper text-center">
                    
                      <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                       
                        Hapus
                      </button>
            </div>
            </div>
            </div>
            </div>
            </div>

   











    </>
  );
}

Murid.defaultProps = {
  color: "light",
};

Murid.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
