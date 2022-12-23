import React from "react";
import PropTypes from "prop-types";


// components


export default function TugasGuru({ color }) {
  return (
    <>
     
   <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
<div class="mt-4">
  <span class="text-gray-700">Halaman Soal</span>
  <div class="mt-2">
    <label class="inline-flex items-center">
    <input type="radio" id="radio1"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio1">1</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio2"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio2">2</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio3"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio3">3</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio4"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio4">4</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio5"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio5">5</label>
      <label class = "">&nbsp;&nbsp; </label>
    </label>
    <label class="inline-flex items-center">
    <input type="radio" id="radio6"class="form-radio" name="accountType" value="busines"></input>
      <label for="radio6">6</label>
     <label class = "">&nbsp;&nbsp; </label>
    </label>
    
    
  </div>
</div>
   </div>
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
                Tugas
              </h3>
            
            </div>
          </div>
        </div>
       
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                     No 1
                    </label>
                    
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                     1+1 =
                    </label>
                    <div class="block">
 

         

  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio" value="1" ></input>
        <span class="ml-2"> 1</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio" value="2"></input>
        <span class="ml-2"> 2</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio" value="3">
          </input>
        <span class="ml-2"> 3</span>
      </label>
      
    </div>
  </div>
</div>
        </div>
       
    </>
  );
}

TugasGuru.defaultProps = {
  color: "light",
};

TugasGuru.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
