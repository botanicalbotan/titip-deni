import React from "react";

import PropTypes from "prop-types";
import MateriKelas from "components/Dropdowns/MateriKelas";
import Guru from "components/Dropdowns/GuruDropdown";
// components
import axios from 'axios';
import Tema from "components/Dropdowns/DaftarTema";
import { useState, useEffect } from 'react';
import { data } from "autoprefixer";
import { useHistory } from "react-router-dom";


export default function Dafgur({ color }) {
  //define state



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
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru/');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
      }

 //delete
 //function "deletePost"
 const deletePost = async () => {
let id = document.getElementById('delete').value
  //sending
  await axios.delete(`deniex.botanicalbotan.com/api/dataguru/delete/${id}`) .then(() => {

    //redirect
   })


   const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru');
   //get response data
   const dataTipe = await responseTipe.data.data;

   //assign response data to state "posts"
   setPostsTipe(dataTipe);

}



   
//input data



const [kontak, setKontak] = useState();

const nomorkontak = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setKontak(value);
};



//input data




//method "storePost"
const Store = async (e) => {
  e.preventDefault();
  
  //send data to server
  await axios.post('deniex.botanicalbotan.com/api/dataguru/store', {
      nomor_induk : document.getElementById('inputNI').value,
      nama: document.getElementById('inputNama').value,
      
      info: document.getElementById('inputInfo').value,
      password: document.getElementById('inputPassword').value,
      alamat: document.getElementById('inputAlamat').value,
      kontak: document.getElementById('inputKontak').value,
})


  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
          fectData();

        
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
                Daftar Guru
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
              Nomor Induk
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
             Nama Guru
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                Info
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
               Kontak
                </th>
               
              
              </tr>
            </thead>
            <tbody> 


     
       
      {postsTipe.map((u)=>  {

  return(<>
 
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
             {u.nomorinduk}
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.nama}
                     </td>
                    
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.info}
                     </td>
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.alamat}
                     </td>
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.kontak}
                     </td>
                 




                    </tr>   </>)})}

   
          

              
            </tbody>
          </table>
        </div>
      </div>
      
        














   
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
                Tambah Guru
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store }>
                                
                                <div className="field mt-5">
                                    <label className="label">Nomor Induk</label>
                                    <div className="controls">
                                    <input required="required" type="text" className="input" placeholder="" id="inputNI"/>
                             
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama</label>
                                    <div className="controls">
                                    <input required="required" type="text" className="input" placeholder=""id="inputNama" />
                         
                                                 </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Info</label>
                                    <div className="controls">
                                    <input required="required"type="text" className="input" placeholder=""id="inputInfo" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                    <div className="field mt-5">
                                    <input   required="required" type={isShown ? "text" : "password"}  id="inputPassword" />
                                   
                                    <label htmlFor="checkbox">    </label>
                                      <input id="checkbox" type="checkbox" checked={isShown} onChange={togglePassword}  />
                                      <label htmlFor="checkbox"></label>
                                    </div>
                                    </div>  
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Alamat</label>
                                    <div className="controls">
                                    <input type="text" className="input" placeholder=""id="inputAlamat" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Kontak</label>
                                    <div className="controls">
                                    <input type="text"value={kontak} onChange={nomorkontak}  className="input" placeholder=""id="inputKontak" />
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
               Hapus Data Guru
              </h3>
              <div className="flex content-center items-center justify-center h-full">
              
            
                  <div className="flex content-center items-center justify-center h-full">
              

                    </div>
                    
                </div>
                <form onSubmit={deletePost }>
                                
                                <div className="field mt-5">
                                    <label className="label">Mata Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="delete" >
 
 {postsTipe.map((u)=>  {
       return(<> <option value={u.nomorinduk} > {u.nama}</option>
               </> 
                   )}
                         )}
 
</select>                     
</div>
                                </div>
                               
                              
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" variant="primary" type="submit" >Hapus</button>
                                </div>
                            </form>
                  
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
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
        
                  
          </div>
          </div>
        </div>
      </div>
          
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
             Ubah Data Guru
              </h3>
              <div className="flex content-center items-center justify-center h-full">
          
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={update}>
                                
                                <div className="field mt-5">
                                    <label className="label">Data Guru yang diubah</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="updatemuatan"  onChange={handleChange} >
 
 {postsTipe.map((u)=>  {
       return(<> <option value={u.nomorinduk} > {u.nama}</option>
               </> 
                   )}
                         )}

</select>                     
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama</label>
                                    <div className="controls">
                                    <input type="text" required="required" className="input" defaultValue={`${namaAawal}`} id ="NamaUpdate"/>                 
            </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">NISN</label>
                                    <div className="controls">
                                        <input type="text" required="required" className="input" defaultValue={`${IDAwal}`} id ="IDUpdate"/>
                                    </div>
                                </div>  
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                    <input required="required" type={isShown2 ? "text" : "password"} defaultValue={`${passwordAwal}`} id="PasswordUpdate" />
                                   
                                    <label htmlFor="checkbox2">    </label>
                                      <input  id="checkbox2" type="checkbox" checked={isShown2} onChange={togglePassword2}  />
                                      <label htmlFor="checkbox2"></label>   </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Informasi Guru</label>
                                    <div className="controls">
                                    <input type="text" className="input" defaultValue={`${infoAwal}`} id ="InfoUpdate" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Alamat</label>
                                    <div className="controls">
                                    <input type="text" className="input" defaultValue={`${alamatAwal}`} id ="AlamatUpdate" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nomor Kontak</label>
                                    <div className="controls">
                                    <input type="text" className="input" defaultValue={`${kontakAwal}`} id ="KontakUpdate" />
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
