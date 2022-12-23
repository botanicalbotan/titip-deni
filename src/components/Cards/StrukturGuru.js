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
  const [postsngajar, setPostsngajar] = useState([]);
  
  const [postsngajar2, setPostsngajar2] = useState([]);












  //define state
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
  
      const response = await axios.get(`deniex.botanicalbotan.com/api/dataguru/get/walikelas`);
      //get response data
      const data = await response.data.data;

      //assign response data to state "posts"
      setPosts(data);
  }




//tipe akademik    
      //define state
      const [postsGuru, setPostsGuru] = useState([]);

      //useEffect hook
      useEffect(() => {
  
          //panggil method "fetchData"
          fectDataGuru();
  
      }, []);
  
      //function "fetchData"
      const fectDataGuru = async () => {
          //fetching
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru/');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsGuru(dataTipe);
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
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru/get/kepsek');
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
  await axios.delete(`deniex.botanicalbotan.com/api/kelas/delete/${id}`) .then(() => {

    //redirect
   })


   const responseTipe = await axios.get('deniex.botanicalbotan.com/api/kelas');
   //get response data
   const dataTipe = await responseTipe.data.data;

   //assign response data to state "posts"
   setPostsTipe(dataTipe);

}



   
//input data



//method "storePost"
const Store2 = async (e) => {
  e.preventDefault();
  
  //send data to server
  await axios.patch('deniex.botanicalbotan.com/api/dataguru/walikelas', {
      nomorinduk : document.getElementById('walikelas').value,
      kelas : document.getElementById('kelas').value,
})


  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru/get/walikelas');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPosts(dataTipe);
          
        
};

//method "storePost"
const Store3 = async (e) => {
  e.preventDefault();
  let kelas = document.getElementById('kelaspengajar').value
  console.log(kelas, document.getElementById('gurungajar').value, document.getElementById('mapelngajar').value)
  //send data to server
  await axios.patch('deniex.botanicalbotan.com/api/dataguru/pengajar', {
      nomorinduk : document.getElementById('gurungajar').value,
      kelas : document.getElementById('kelaspengajar').value,
      mapel : document.getElementById('mapelngajar').value,
})


  const responseTipe = await axios.get(`deniex.botanicalbotan.com/api/dataguru/get/tampilpengajar/${kelas}`);
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsngajar(dataTipe);
        

        
};


//input data




//method "storePost"
const Store = async (e) => {
  e.preventDefault();
  
  //send data to server
  await axios.patch('deniex.botanicalbotan.com/api/dataguru/kepsek', {
      nomorinduk : document.getElementById('kepsek').value,
     
})


  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/dataguru/get/kepsek');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
          fectData();

        
};
   

const [max, setNamaMax] = useState('');




  //kelas  
      //define state
      const [postskelas, setPostskelas] = useState([]);

      //useEffect hook
      useEffect(() => {
  
          //panggil method "fetchData"
          fectDatakelas();
  
      }, []);
  
      //function "fetchData"
      const fectDatakelas = async () => {
          //fetching
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/kelas/');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostskelas(dataTipe);
      }



//update



//method "Update"
const update = async (e) => {
  e.preventDefault();
  let id = document.getElementById('updatemuatan').value
  //send data to server
  await axios.patch(`deniex.botanicalbotan.com/api/kelas/update/${id}`, {
      idkelas : document.getElementById('IDInput').value,
      namakelas: document.getElementById('NamaInput').value,
      
      kurikulum: document.getElementById('urutanupdate').value,
  })


  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/kelas');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
         
          const response = await axios.get(`deniex.botanicalbotan.com/api/kelas/cekhapus`);
          //get response data
          const data = await response.data.data;
    
          //assign response data to state "posts"
          setPosts(data);
      
      
};
   

//update klik

const [IDAwal, setIDAwal] = useState('');
  const [namaAawal, setNamaAwal] = useState('');
  const [UrutanAwal, setUrutanAwal] = useState('');






  const handleChange = async event => {
    console.log(event.target.value);
    setSelected(event.target.value);
     //get data from server
    await axios.get(`deniex.botanicalbotan.com/api/dataguru/get/pengajar/${event.target.value}`);
     //get response data
   

     //assign response data to state "posts"
     setPostsngajar([]);
   
  };
  
  
  
  const [selected, setSelected] = useState();
  
  const handletampil = async event => {
    let kelas= document.getElementById('kelaspengajar').value
  console.log(kelas)
     //get data from server
     const response = await axios.get(`deniex.botanicalbotan.com/api/dataguru/get/tampilpengajar/${kelas}`);
     //get response data
     const data = await response.data.data;

     //assign response data to state "posts"
     setPostsngajar(data);
   
  };



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
                Kepala Sekolah
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
             Nama
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
            Ubah Kepala Sekolah
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store }>
                                
                             
                                <div className="field mt-5">
                                    <label className="label">Nama</label>
                                    <div className="controls">
                                    <select name="updatekepsek" id="kepsek" >

                                    {postsGuru.map((u)=>  {
       return(<> <option value={u.nomorinduk} > {u.nama}</option>
               </> 
                   )}
                         )}</select>
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
                Wali Kelas
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
           Kelas
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
             Wali Kelas
                </th>
                
          
                
              
              </tr>
            </thead>
            <tbody> 


     
       
     {posts.map((u)=>  {

return(<>
 
                   <tr >
                   <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
             {u.namakelas}
                     </td>
                  
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.nama}
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
              >Ubah Wali Kelas
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store2 }>
                                
                    <div className="field mt-5">
                                    <label className="label">Kelas</label>
                                    <div className="controls">
                                    <select name="updatekelas" id="kelas" >

                                    {postskelas.map((u)=>  {
       return(<> <option value={u.idkelas} > {u.namakelas}</option>
               </> 
                   )}
                         )}</select>
                                                 </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Guru</label>
                                    <div className="controls">
                                    <select name="updatewali" id="walikelas" >

                                    {postsGuru.map((u)=>  {
       return(<> <option value={u.nomorinduk} > {u.nama}</option>
               </> 
                   )}
                         )}</select>
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
               Pengajar Materi Pelajaran
              </h3>
              <select name="selectkelaspengajar" id="kelaspengajar" value={selected} onChange={handleChange}  
                      >
              <option value=""  selected="selected" disabled hidden>Pilih Kelas Terlebih Dahulu</option>
        {  postskelas.map((kelas)=>  {
    return (<> <option value={kelas.idkelas} > {kelas.namakelas}</option>
            </> 
                )}
                      )
        } 
      </select>

            </div>
          </div>
          <button 
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    type="button"  onClick={handletampil}  
                  >
                    
                    Tampilkan Data
                  </button>
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
           Mata Pelajaran
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
             Pengajar
                </th>
                
          
                
              
              </tr>
            </thead>
            <tbody> 


     
       
     {postsngajar.map((u)=>  {

return(<>
 
                   <tr >
                   <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
             {u.mapel}
                     </td>
                  
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.nama}
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
              >Ubah Pengajar Materi Pelajaran
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store3 }>
                                
                    <div className="field mt-5">
                                    <label className="label">Nama</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="mapelngajar" >

                                    {postsngajar.map((u)=>  {
       return(<> <option value={u.id_mapel} > {u.mapel}</option>
               </> 
                   )}
                         )}</select>
                                                 </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Guru</label>
                                    <div className="controls">
                                    <select name="updategurungajar" id="gurungajar" >

                                    {postsGuru.map((u)=>  {
       return(<> <option value={u.nomorinduk} > {u.nama}</option>
               </> 
                   )}
                         )}</select>
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
