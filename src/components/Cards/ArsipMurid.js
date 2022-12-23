import React from "react";

import PropTypes from "prop-types";

// components
import axios from 'axios';

import { useState, useEffect } from 'react';
import { data } from "autoprefixer";
import { useHistory } from "react-router-dom";


export default function Dafgur({ color }) {
  //define state

  const [postsmurid, setPostsmurid] = useState([]);
  const [postsTipe, setPostsTipe] = useState([]);
  
  const [selected, setSelected] = useState();
  //function Handle kelas

  const handlekelas = async event => {
    console.log(event.target.value);
    setSelected(event.target.value);
    const responsemurid = await axios.get(`deniex.botanicalbotan.com/api/datamurid/muridkelas/${event.target.value}`);
    //get response data
    const datamurid = await responsemurid.data.data;
  
    setPostsmurid(datamurid);
    let kelas = document.getElementById('kelas').value
    const responsekelas = await axios.get(`deniex.botanicalbotan.com/api/raport/struktur/${kelas}`);
    //get response data
    const datakelas = await responsekelas.data.data;

    //assign response data to state "posts"
    setPostsstruktur(datakelas);
  

    const maxsupermax = await axios.get(`deniex.botanicalbotan.com/api/raport/maksimalurutan/${kelas}`);
  //get response data
  const supermax = await maxsupermax.data.data;

  //assign response data to state "posts"
  setNamaMax(supermax);
  };


  //KELAS    
      //define state
      const [postskelas, setPostsKelas] = useState([]);

      //useEffect hook
      useEffect(() => {
  
          //panggil method "fetchData"
          fectDataKelas();
  
      }, []);
  
      //function "fetchData"
      const fectDataKelas = async () => {
          //fetching
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/kelas');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsKelas(dataTipe);
      }




  
      const [postsstruktur, setPostsstruktur] = useState([]);
    
      //useEffect hook
      useEffect(() => {
      
        //panggil method "fetchData"
        fectStruktur();
    
    }, []);
    
      //function "fetchData"
    
    
      const fectStruktur= async () => {
          //fetching
          let kelas = document.getElementById('kelas').value
          const response = await axios.get(`deniex.botanicalbotan.com/api/raport/struktur/${kelas}`);
          //get response data
          const data = await response.data.data;
    
          //assign response data to state "posts"
          setPostsstruktur(data);
      }


//Urutan  
      //define state
      const [postsUrutan, setPostsUrutan] = useState([]);
      const [setmax, setNamaMax] = useState([]);
      //useEffect hook
     


//method "storePost"
const Store = async (e) => {
  e.preventDefault();
  
  //send data to server
  await axios.post('deniex.botanicalbotan.com/api/raport/store', {
      urut : document.getElementById('urutan').value,
      tipe: document.getElementById('muatan').value,
      
      kelas: document.getElementById('kelas').value,
    
})



let kelas = document.getElementById('kelas').value
const responsekelas = await axios.get(`deniex.botanicalbotan.com/api/raport/struktur/${kelas}`);
//get response data
const datakelas = await responsekelas.data.data;

//assign response data to state "posts"
setPostsstruktur(datakelas);


const maxsupermax = await axios.get(`deniex.botanicalbotan.com/api/raport/maksimalurutan/${kelas}`);
//get response data
const supermax = await maxsupermax.data.data;

//assign response data to state "posts"
setNamaMax(supermax);
};
   



 //delete
 //function "deletePost"
 const deletePost = async () => {
  let id = document.getElementById('delete').value
  let kelas = document.getElementById('kelas').value
    //sending
    await axios.delete(`deniex.botanicalbotan.com/api/raport/delete/${id}/${kelas}`) .then(() => {
  
      //redirect
     })
  
     const responsekelas = await axios.get(`deniex.botanicalbotan.com/api/raport/struktur/${kelas}`);
     //get response data
     const datakelas = await responsekelas.data.data;
     
     //assign response data to state "posts"
     setPostsstruktur(datakelas);
     
     
     const maxsupermax = await axios.get(`deniex.botanicalbotan.com/api/raport/maksimalurutan/${kelas}`);
     //get response data
     const supermax = await maxsupermax.data.data;
     
     //assign response data to state "posts"
     setNamaMax(supermax);
  
  }
  
  






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















  
  const [selectnama, setSelectednama] = useState();
  
  



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
                Struktur Muatan dalam Raport
              </h3>
              <select name="selectkelas" id="kelas" value={selected} onChange={handlekelas}  
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="">
              <option value="" selected disabled hidden>Pilih Kelas Terlebih Dahulu</option>
        {  postskelas.map((kelas)=>  {
    return (<> <option value={kelas.idkelas} > {kelas.namakelas}</option>
            </> 
                )}
                      )
        }
      </select>

 
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
              Nomor Urutan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
            Muatan
                </th>
                
            
              
              </tr>
            </thead>
            <tbody> 


     
       
      {postsstruktur.map((u)=>  {

  return(<>
 
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
             {u.urut}
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.tipe_akademik}
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
                Tambah Muatan Dalam Raport
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store }>
                                
                                <div className="field mt-5">
                                    <label className="label">Urutan</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="urutan"  >
 
 {postsstruktur.map((u)=>  {
       return(<> <option value={u.urut} > {u.urut}</option>
               </> 
                   )}
                         )}
 <option value={`${setmax}`} > {`${setmax}`}</option>
</select>   
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Muatan</label>
                                    <div className="controls">
                                    <select name="muatan" id="muatan"  >
 
 {postsTipe.map((u)=>  {
       return(<> <option value={u.id} > {u.tipe_akademik}</option>
               </> 
                   )}
                         )}

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
              Hapus Struktur Muatan dalam Raport
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
 
 {postsstruktur.map((u)=>  {
       return(<> <option value={u.urut} > Urutan :{u.urut} Muatan : {u.tipe_akademik}</option>
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
  
    </>
  );
}

Dafgur.defaultProps = {
  color: "light",
};

Dafgur.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
