import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import TugasGuru from "components/Cards/TugasGuru";
// components

import MateriKelas from "components/Dropdowns/MateriKelas";
import Tema from "components/Dropdowns/DaftarTema";
import Guru from "components/Dropdowns/GuruDropdown";
export default function KelasMurid({ color }) {
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
                Bab 1
              </h3>
            
            </div>
          </div>
        </div>
       
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                     Materi
                    </label>
                    <Link to="components/Cards/TugasGuru">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                     Bab 1 tentang pembelajaran matematika dasar
                    </label>
                    </Link>
                    <Link to="components/Cards/TugasGuru">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                     Bab 1 tentang pembelajaran matematika dasar2
                    </label>
                    </Link>
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tugas
                    </label>
                    <Link to="/admin/tugasguru">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                   
                    >
                     Tugas 1 tentang pembelajaran matematika dasar2
                    </label>
                    </Link>
                    <input
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Komentar"
                  />
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                   
                    >
                     Denny :
                    </label>
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                   
                    >
                     Tugas 2 Mana Bu?
                    </label>
                 
                </div>
             
  
   
        
    </>
  );
}

KelasMurid.defaultProps = {
  color: "light",
};

KelasMurid.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
