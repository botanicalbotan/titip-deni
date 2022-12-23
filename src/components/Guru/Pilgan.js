import React from "react";

import PropTypes from "prop-types";
import MateriKelas from "components/Dropdowns/MateriKelas";
import Guru from "components/Dropdowns/GuruDropdown";
// components
import axios from 'axios';
import Tema from "components/Dropdowns/DaftarTema";
import { useState, useEffect } from 'react';
import { data } from "autoprefixer";
import { useHistory, useParams } from "react-router-dom";



export default function Dafgur({ color }) {
  //define state

  const  {idsoal} = useParams();

  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };






  const [isShown2, setIsSHown2] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword2 = () => {
    setIsSHown2((isShown2) => !isShown2);
  };



  
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  //useEffect hook
  useEffect(() => {
  
    //panggil method "fetchData"
    fectData();

}, []);

  //function "fetchData"


  const fectData = async () => {
      //fetching
  
      const response = await axios.get(`deniex.botanicalbotan.com/api/dataguru/cekhapus`);
      //get response data
      const data = await response.data.data;

      //assign response data to state "posts"
      setPosts(data);
  }












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
          const responseTipe = await axios.get(`deniex.botanicalbotan.com/api/soal/soalpilganguru/${idsoal}`);
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
      }

 //delete
 //function "deletePost"
 const deletePost = async () => {

  //sending
  await axios.delete(`deniex.botanicalbotan.com/api/soal/deletepilganguru/${idsoal}`) .then(() => {

    //redirect
   })

   const responseTipe = await axios.get(`deniex.botanicalbotan.com/api/soal/soalpilganguru/${idsoal}`);
   //get response data
   const dataTipe = await responseTipe.data.data;

   //assign response data to state "posts"
   setPostsTipe(dataTipe);
   

}



   



//input data




//method "storePost"
const Store = async () => {

  if (idsoal == null){


  }else{
  //send data to server
   //send data to server
   await axios.post(`deniex.botanicalbotan.com/api/soal/store/buatpilgan/${idsoal}`, {
   
   
   soal : document.getElementById('soal').value,
    a: document.getElementById('A').value,
    b: document.getElementById('B').value,
    c: document.getElementById('C').value,
    d: document.getElementById('D').value,
    e: document.getElementById('E').value,
    kunci: document.getElementById('kunci').value,
})




  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
          fectData();

}
};
   



//update



//method "Update"
const update = async () => {
  
  let id = document.getElementById('updatemuatan').value
  //send data to server
  await axios.patch(`deniex.botanicalbotan.com/api/dataguru/update/${id}`, {
      nama : document.getElementById('NamaUpdate').value,
      nomorinduk: document.getElementById('IDUpdate').value,
      password: document.getElementById('PasswordUpdate').value,
      info: document.getElementById('InfoUpdate').value,
      alamat: document.getElementById('AlamatUpdate').value,
      kontak: document.getElementById('KontakUpdate').value,
  })


  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
         
          const response = await axios.get(`deniex.botanicalbotan.com/api/dataguru/cekhapus`);
          //get response data
          const data = await response.data.data;
    
          //assign response data to state "posts"
          setPosts(data);
      
      
};
   

//update klik

const [IDAwal, setIDAwal] = useState('');
  const [namaAawal, setNamaAwal] = useState('');
  const [infoAwal, setInfoAwal] = useState('');
  const [passwordAwal, setPasswordAwal] = useState('');

  const [alamatAwal, setAlamatAwal] = useState('');
  const [kontakAwal, setKontakAwal] = useState('');

  const handleChange = async event => {
    console.log(event.target.value);
    setSelected(event.target.value);
     //get data from server
     const response = await axios.get(`deniex.botanicalbotan.com/api/dataguru/${event.target.value}`);
     //get response data
     const data = await response.data.data

     //assign data to state
     setIDAwal(data[0].nomorinduk);
    setNamaAwal(data[0].nama);
    setInfoAwal(data[0].info)
    setPasswordAwal(data[0].password)
    setAlamatAwal(data[0].alamat)
    setKontakAwal(data[0].kontak)
  };
  
  
  
  const [selected, setSelected] = useState();
  
  



  return (
    <>

<div>
    
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
              Daftar Soal 
              </h3>
      


   
          

      
        </div>
      </div>
      
        </div>
        </div>





        {postsTipe.map((u)=>  {
  
  return(<>

        <div>
    
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
            
                
    
  <label className="label">Soal No : {u.no}</label>
  <p>&nbsp;</p>
  <label className="label">{u.soal}</label>
  <p>&nbsp;</p>                      
  <label className="label">A {u.a}</label>
  <p>&nbsp;</p><label className="label">B {u.b}</label>
  <p>&nbsp;</p><label className="label"> C {u.c}</label>
  <p>&nbsp;</p><label className="label">D {u.d}</label>
  <p>&nbsp;</p><label className="label">E {u.e}</label>
  <p>&nbsp;</p>
  <label className="label">Kunci : {u.kunci}</label>
              
        
                     
         
                     
                 
  
  
  
  
  
  
  
     
            
  
        
          </div>
        </div>
        
          </div>
          </div>
  
          </>)})}
  
  
  
  
  
  

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
             Tambah Soal
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store }>
                                
                               
                                <div className="field mt-5">
                                    <label className="label">Soal </label>
                                    <div className="controls">
                                    <textarea name="fullteks" id="soal" cols="40" rows="5" class =" placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"></textarea>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Pilihan A</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="A" placeholder="" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Pilihan B</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="B" placeholder="" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Pilihan C</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="C" placeholder="" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Pilihan D</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="D" placeholder="" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">PilihanE</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="E" placeholder="" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Kunci Jawaban</label>
                                    <div className="controls">
                                        <select  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      name="selectujian" id="kunci"  >
         
              <option value="A" selected >A</option>
              <option value="B" >B</option>
              <option value="C" >C</option>
              <option value="D" >D</option>
              <option value="E" >E</option>

</select>   
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" variant="primary" type="submit" >Update</button>
                                </div>
                            </form>
                  
              
                  </div>
                  </div>
                  </div>
   </div>
 </div>
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
         Kurangi Soal
              </h3>
              <div className="flex content-center items-center justify-center h-full">
              
            
                  <div className="flex content-center items-center justify-center h-full">
              

                    </div>
                    
                </div>
                <form onSubmit={deletePost }>
                                
                           
                               
                              
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" variant="primary" type="submit" >Hapus</button>
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

Dafgur.defaultProps = {
  color: "light",
};

Dafgur.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
