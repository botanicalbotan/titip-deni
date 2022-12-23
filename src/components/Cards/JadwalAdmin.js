import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// components


import { useHistory } from "react-router-dom";



import HariDropdown from "components/Dropdowns/HariDropdown.js";
import MateriKelas from "components/Dropdowns/MateriKelas";

import Tema from "components/Dropdowns/DaftarTema";

  


export default function JadwalAdmin({ color }) {








    //define state
    const [post, setPost] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectMapel();

    }, []);

    //function "fetchData"


     
    const fectMapel = async () => {
        //fetching
    
        const response = await axios.get(`deniex.botanicalbotan.com/api/akademik_a/tes3`);
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        console.log(data)
        setPost(data);
    }





 //jamke  
      //define state
      const [postsJamke, setPostsJamke] = useState([]);

    
     

 //jamke  
      //define state
      const [postsSisa, setPostsSisa] = useState([]);



 




  //KELAS    
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
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/kelas');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
      }




//define state
const [posts, setPosts] = useState([]);

//useEffect hook


//function "fetchData"



const handleChange = async event => {
  console.log(event.target.value);
  setSelected(event.target.value);
  const response = await axios.get(`deniex.botanicalbotan.com/api/jadwal/${event.target.value}`);
  //get response data
  const data = await response.data.data;

  //jam
  const responsejamke= await axios.get(`deniex.botanicalbotan.com/api/jadwal/jamke/${event.target.value}`);
          //get response data
          const jamke = await responsejamke.data.data;
  
          //assign response data to state "posts"
          setPostsJamke(jamke);


  //assign response data to state "posts"
  setPosts(data);
 
//sisa
//jam
const sisa= await axios.get(`deniex.botanicalbotan.com/api/jadwal/getsisa/${event.target.value}`);
//get response data
const sisanya = await sisa.data.data;

//assign response data to state "posts"
setPostsSisa(sisanya);


};



const [selected, setSelected] = useState();








 
//input data

 //state


//state validation
const [validation, setValidation] = useState({});

//history
const history = useHistory();

//method "storePost"
const StoreData = async (e) => {
  e.preventDefault();
console.log ( document.getElementById('jam').value,)
console.log ( document.getElementById('kelas').value,)
console.log ( document.getElementById('mapel').value,)
console.log ( document.getElementById('hari').value,)
  //send data to server
  await axios.post('deniex.botanicalbotan.com/api/jadwal/store', {
    
    jamke: document.getElementById('jam').value,
    kelas: document.getElementById('kelas').value,
    mapel: document.getElementById('mapel').value,
    hari: document.getElementById('hari').value,
     
  })
  const response = await axios.get(`deniex.botanicalbotan.com/api/jadwal/${document.getElementById('kelas').value}`);
  //get response data
  const data = await response.data.data;

  //jam
  const responsejamke= await axios.get(`deniex.botanicalbotan.com/api/jadwal/jamke/${document.getElementById('kelas').value}`);
          //get response data
          const jamke = await responsejamke.data.data;
  
          //assign response data to state "posts"
          setPostsJamke(jamke);


  //assign response data to state "posts"
  setPosts(data);
 
//sisa
//jam
const sisa= await axios.get(`deniex.botanicalbotan.com/api/jadwal/getsisa/${document.getElementById('kelas').value}`);
//get response data
const sisanya = await sisa.data.data;

//assign response data to state "posts"
setPostsSisa(sisanya);

  
}





      
 //delete
 //function "deletePost"
 const deletePost = async () => {

  //sending
  await axios.delete(`deniex.botanicalbotan.com/api/jadwal/delete/${document.getElementById('kelas').value}`)


  const response = await axios.get(`deniex.botanicalbotan.com/api/jadwal/${document.getElementById('kelas').value}`);
  //get response data
  const data = await response.data.data;

  //jam
  const responsejamke= await axios.get(`deniex.botanicalbotan.com/api/jadwal/jamke/${document.getElementById('kelas').value}`);
          //get response data
          const jamke = await responsejamke.data.data;
  
          //assign response data to state "posts"
          setPostsJamke(jamke);


  //assign response data to state "posts"
  setPosts(data);
 
//sisa
//jam
const sisa= await axios.get(`deniex.botanicalbotan.com/api/jadwal/getsisa/${document.getElementById('kelas').value}`);
//get response data
const sisanya = await sisa.data.data;

//assign response data to state "posts"
setPostsSisa(sisanya);

  
}

//tambah
 //function "deletePost"
 const tambahPost = async () => {

  //sending
  await axios.post(`deniex.botanicalbotan.com/api/jadwal/tambah/${document.getElementById('kelas').value}`)


  const response = await axios.get(`deniex.botanicalbotan.com/api/jadwal/${document.getElementById('kelas').value}`);
  //get response data
  const data = await response.data.data;

  //jam
  const responsejamke= await axios.get(`deniex.botanicalbotan.com/api/jadwal/jamke/${document.getElementById('kelas').value}`);
          //get response data
          const jamke = await responsejamke.data.data;
  
          //assign response data to state "posts"
          setPostsJamke(jamke);


  //assign response data to state "posts"
  setPosts(data);
 
//sisa
//jam
const sisa= await axios.get(`deniex.botanicalbotan.com/api/jadwal/getsisa/${document.getElementById('kelas').value}`);
//get response data
const sisanya = await sisa.data.data;

//assign response data to state "posts"
setPostsSisa(sisanya);

  
}

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
                Jadwal
              </h3>
              <select name="selectkelas" id="kelas" value={selected} onChange={handleChange}  
                      className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="">
              <option value="" selected disabled hidden>Pilih Kelas Terlebih Dahulu</option>
        {  postsTipe.map((kelas)=>  {
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
                  Jam Ke 
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Senin
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Selasa
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Rabu
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Kamis
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Jumat
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
            {
                   postsJamke.map((post) => {return(<>
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
             {post.jamke }
                     </td>
                    
                    
                    
                    
                    
        
                     {
                     
                     posts.filter((post1)=>post1.jamke== post.jamke && post1.hari == 1).map((post1) => {return(<> <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post1.mapel }
                             </td>
                   </>)}   )
                           
                     }
                 
                 {
                     
                     posts.filter((post2)=>post2.jamke== post.jamke && post2.hari == 2).map((post2) => {return(<> <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post2.mapel }
                             </td>
                   </>)}   )
                           
                     }
                           {
                     
                     posts.filter((post3)=>post3.jamke== post.jamke && post3.hari == 3).map((post3) => {return(<> <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post3.mapel }
                             </td>
                   </>)}   )
                           
                     }
                           {
                     
                     posts.filter((post4)=>post4.jamke== post.jamke && post4.hari == 4).map((post4) => {return(<> <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post4.mapel }
                             </td>
                   </>)}   )
                           
                     }
                           {
                     
                     posts.filter((post5)=>post5.jamke== post.jamke && post5.hari == 5).map((post5) => {return(<> <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post5.mapel }
                             </td>
                   </>)}   )
                           
                     }
                           {
                     
                     posts.filter((post6)=>post6.jamke== post.jamke && post6.hari == 6).map((post6) => {return(<> <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post6.mapel }
                             </td>
                   </>)}   )
                           
                     }




                    </tr>   </>)})}
              
            </tbody>
          </table>
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
             Waktu Materi Terpakai Tiap Minggu
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
                  Materi
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Total Waktu
                </th>
               
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Sisa
                </th>
              
              </tr>
            </thead>
            <tbody>

          
            {
                   postsSisa.map((postsisa) => {return(<>
                   
                   <tr>
                   
                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {postsisa.mapel}
                </td>
 
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {postsisa.total}
                </td>
               
             
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {postsisa.sisa}
                </td>
                                 </tr>
                   
                   
                   </>)})}



        
              
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
               Ubah Jadwal
              </h3>
              <div className="flex content-center items-center justify-center h-full">
          
                    </div>
                    <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor=""
                    >
                     Hari
                    </label>
                    <select name="selecthari" id="hari" className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="">
              <option value="" selected disabled hidden>Pilih Hari</option>
       
   <option value='1' > Senin</option>
   <option value='2' > Selasa</option>
   <option value='3' > Rabu</option>
   <option value='4' > Kamis</option>
   <option value='5' > Jumat</option>
   <option value='6' > Sabtu</option>
      </select>
      </div>
                <div className="relative w-full mb-3">




                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor=""
                    >
                      Mapel
                    </label>
                    <select name="selectmapel" id="mapel" className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="">
              <option value="" selected disabled hidden>Pilih Mapel</option>
             
              {  postsSisa.map((mapel)=>  {
    return (<> <option value={mapel.id_mapel} > {mapel.mapel}</option>
            </> 
                )}
                
                      )
        }
         <option value="---"> kosongkan</option>
      </select>
                  </div>
                  
                  <div className="relative w-full mb-3">
                    
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Jam Ke
                    </label>
                    <select name="selectjam" id="jam" className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="">
                    {  postsJamke.map((postjam) =>  {
    return (<> <option value={postjam.jamke} > {postjam.jamke}</option>
            </> 
                )}
                      )
        }
</select>
                  </div>
                   <form onSubmit={ StoreData }>
                  <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    
                  >
                    
                    Tambah
                  </button>
                  
              
                  </div>
                  </form>
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
                Ubah Jam Pelajaran
              </h3>
           
              
                    
                    </div>
                    
                </div>
                <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor=""
                    >
                    
                    </label>
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor=""
                    >
                      
                    </label>
                <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor=""
                    >
                      Tambahkan 1 jam pelajaran
                    </label>
      
                <div className="btn-wrapper text-center">
             
                <button
                  className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                  type="button"  onClick={() => tambahPost()} 
                >
         
                  Tambah
                </button>
          </div>
          <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor=""
                    >
                      Mengurangi satu jam pelajaran (termasuk mapel yang berada di jam pelajaran)
                    </label>
                    <div className="btn-wrapper text-center">
                   
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    type="button"  onClick={() => deletePost()} 
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

JadwalAdmin.defaultProps = {
  color: "light",
};

JadwalAdmin.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
