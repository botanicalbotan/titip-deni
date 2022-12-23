import React from "react";
import PropTypes from "prop-types";

import Kunci from "components/Dropdowns/KunciDropdown";
// components



export default function KoreksiEssai({ color }) {
  return (
    <>
    
    <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
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
                Koreksi
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
              
                    </div>
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                    Nama : Denny Satria
                    </label>
                   
                  
                  <div class="mt-4">

  <div class="mt-2">
    <label class="inline-flex items-center">
    <input type="radio" id="radio1"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio1">Denny</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio2"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio2">Yusril</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio3"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio3">Agus</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio4"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio4">Parni</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio5"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio5">Dono</label>
      <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio6"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio6">Joni</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    
    
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >

                    <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                    Soal 1
                    </label>
                    
                  </div>
               
                  <label class = "">Kapan Indonesia Merdeka </label>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Jawaban </label>
                  <label class = "">17 Agustus 1945 </label>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Nilai Jawaban </label>
                  <input
                      
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder=""
                    />
<label class = "">&nbsp;&nbsp; </label>
<div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                    Soal 2
                    </label>
                    
                  </div>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Berapa Lama Indonesia dijajah Jepang </label>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Jawaban </label>
                  <label class = "">3.5 tahun </label>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Nilai Jawaban </label>
                  <input
                      
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder=""
                    />

<label class = "">&nbsp;&nbsp; </label>
<div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                    Soal 3
                    </label>
                    
                  </div>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Siapa Bapak Pendidikan Indonesia </label>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Jawaban </label>
                  <label class = "">Ki Hajar Dewantara</label>
                  <label class = "">&nbsp;&nbsp; </label>
                  <label class = "">Nilai Jawaban </label>
                  <input
                      
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder=""
                    />

<label class = "">&nbsp;&nbsp; </label>




                  <div className="btn-wrapper text-center">
                 
                  <button
                    className="flex space-y-10 bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    
                    Sebelumnya
                  </button>
                  <button
                    className="flex space-y-10 bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    
                    Selanjutnya
                  </button>
                  </div>
                  </div>
               
  
 
 
</>
  );
}

KoreksiEssai.defaultProps = {
  color: "light",
};

KoreksiEssai.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
