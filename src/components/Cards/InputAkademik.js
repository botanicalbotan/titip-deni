import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// components

import MateriKelas from "components/Dropdowns/MateriKelas";
import Tema from "components/Dropdowns/DaftarTema";
import Guru from "components/Dropdowns/GuruDropdown";
import { useHistory } from "react-router-dom";


export default function InputAkademik({ color }) {


// components

  //tipe akademik    
      //define state
      const [postsTipe, setPostsTipe] = useState([]);

      //useEffect hook
      useEffect(() => {
  
          //panggil method "fetchData"
          fectDataTipe();
  
      }, []);
  
      //function "fetchData"
      const fectDataTipe = async () => {
          //fetching
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
      }


//input data

 //state
 const [IdInput, setId] = useState('');
 const [MapelInput, setMapel] = useState('');
 const [Kelas1Input, setKelas1] = useState('');
 const [Kelas2Input, setKelas2] = useState('');
 const [Kelas3Input, setKelas3] = useState('');
 const [Kelas4Input, setKelas4] = useState('');
 const [Kelas5Input, setKelas5] = useState('');
 const [Kelas6Input, setKelas6] = useState('');
 const [TipeAkaInput, setTipeAka] = useState('');
 //state validation
 const [validation, setValidation] = useState({});

 //history
 const history = useHistory();

 //method "storePost"
 const storePost = async (e) => {
     e.preventDefault();
     
     //send data to server
     await axios.post('deniex.botanicalbotan.com/api/akademik_a/store', {
         id: IdInput,
         mapel: MapelInput,
         kelas1: Kelas1Input,
         kelas2: Kelas2Input,
         kelas3: Kelas3Input,
         kelas4: Kelas4Input,
         kelas5: Kelas5Input,
         kelas6: Kelas6Input,
         tipe_aka: TipeAkaInput,
     })
     .then(() => {

         //redirect
         history.push('/admin/dafgur');

     })
     .catch((error) => {

         //assign validation on state
         setValidation(error.response.data);
     })
     
 };


  return (
    <>


<div
        className={
          "relative flex space-x-4 h-36 " +
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
                Tambah Materi
              </h3>  





              <form onSubmit={ storePost }>
              <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                                <div className="field mt-5">
                                    <label className="label">Urutan</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder=""
                                            value={IdInput} onChange={(e) => setId(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama Mata Pelajaran</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={MapelInput} onChange={(e) => setMapel(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 1 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={Kelas1Input} onChange={(e) => setKelas1(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 2 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={Kelas2Input} onChange={(e) => setKelas2(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 3 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={Kelas3Input} onChange={(e) => setKelas3(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 4 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={Kelas4Input} onChange={(e) => setKelas4(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 5 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={Kelas5Input} onChange={(e) => setKelas5(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 6 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={Kelas6Input} onChange={(e) => setKelas6(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Tipe Akademik</label>
                                    <div className="controls">
                                      
                                      
                                    </div>
                                </div>
                                
                                <div className="field mt-5">
                                    <label className="label">Tipe Akademik</label>
                                    <div className="controls">
                                    <select name="membership" id="membership">
 
                                   
 {postsTipe.map((kategori)=>  {

return(<> <option className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={TipeAkaInput} onChange={(e) => setTipeAka(e.target.value)}>{kategori.tipe_akademik}</option>
</> )})}
                          
</select>         
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="" value={Kelas6Input} onChange={(e) => setKelas6(e.target.value)} />
                                    </div>
                                    </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>

               

             
                
                  </div>
                  </div>


   </div>


</div>
</div>
    
    </>
  );
}

InputAkademik.defaultProps = {
  color: "light",
};

InputAkademik.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
