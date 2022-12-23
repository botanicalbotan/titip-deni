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
  
      const response = await axios.get(`deniex.botanicalbotan.com/api/tipe_akademik/tes`);
      //get response data
      const data = await response.data.data;

      //assign response data to state "posts"
      setPosts(data);
  }




//tipe akademik    
      //define state
      const [postsUrutan, setPostsUrutan] = useState([]);

      //useEffect hook
      useEffect(() => {
  
          //panggil method "fetchData"
          fectDataUrutan();
  
      }, []);
  
      //function "fetchData"
      const fectDataUrutan= async () => {
          //fetching
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik/urutansemua');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsUrutan(dataTipe);

           //fetching
  const maxsupermax = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik/maksimalurutan');
  //get response data
  const supermax = await maxsupermax.data.data;

  //assign response data to state "posts"
  setNamaMax(supermax);
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
          const responseTipe = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
      }

 //delete
 //function "deletePost"
 const deletePost = async (e) => {
  e.preventDefault();
let id = document.getElementById('delete').value
  //sending
  await axios.delete(`deniex.botanicalbotan.com/api/tipe_akademik/delete/${id}`) .then(() => {

    //redirect
   })


   const responseTipe = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik');
   //get response data
   const dataTipe = await responseTipe.data.data;

   //assign response data to state "posts"
   setPostsTipe(dataTipe);
   fectData();

   const response = await axios.get(`deniex.botanicalbotan.com/api/tipe_akademik/tes`);
   //get response data
   const data = await response.data.data;

   //assign response data to state "posts"
   setPosts(data);

}



   
//input data

 //state
 const [ID, setID] = useState('');
 const [Muatan, setMuatan] = useState('');







//input data


//state validation
const [validation, setValidation] = useState({});


//method "storePost"
const Store = async (e) => {
  e.preventDefault();
  
  //send data to server
  await axios.post('deniex.botanicalbotan.com/api/tipe_akademik/storedata', {
      id : ID,
      tipe_akademik: Muatan,
      
      urutan: document.getElementById('urutan').value,
})


  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
          fectData();

          const response = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik/urutansemua');
          //get response data
          const dataUrutan = await response.data.data;
  
          //assign response data to state "posts"
          setPostsUrutan(dataUrutan);

           //fetching
  const maxsupermax = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik/maksimalurutan');
  //get response data
  const supermax = await maxsupermax.data.data;

  //assign response data to state "posts"
  setNamaMax(supermax);
};
   

const [max, setNamaMax] = useState('');







//update
const [IDUpdate, setIDUpdate] = useState('');
 const [MuatanUpdate, setMuatanUpdate] = useState('');


//method "Update"
const update = async (e) => {
  e.preventDefault();
  let id = document.getElementById('updatemuatan').value
  //send data to server
  await axios.patch(`deniex.botanicalbotan.com/api/tipe_akademik/update/${id}`, {
      id : document.getElementById('IDInput').value,
      tipe_akademik: document.getElementById('NamaInput').value,
      
      urutan: document.getElementById('urutanupdate').value,
  })


  const responseTipe = await axios.get('deniex.botanicalbotan.com/api/tipe_akademik');
          //get response data
          const dataTipe = await responseTipe.data.data;
  
          //assign response data to state "posts"
          setPostsTipe(dataTipe);
         
   const response = await axios.get(`deniex.botanicalbotan.com/api/tipe_akademik/tes`);
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
     const response = await axios.get(`deniex.botanicalbotan.com/api/tipe_akademik/${event.target.value}`);
     //get response data
     const data = await response.data.data

     //assign data to state
     setIDAwal(data[0].id);
    setNamaAwal(data[0].tipe_akademik);
    setUrutanAwal(data[0].urutan)

   
  };
  
  
  
  const [selected, setSelected] = useState();
  
  



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
                Struktur Kurikulum
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
                Urutan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 ID Muatan
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                Nama Muatan
                </th>
               
                
              
              </tr>
            </thead>
            <tbody> 


     
       
     {postsTipe.map((kategori)=>  {

return(<>
 
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
             {kategori.urutan}
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {kategori.id}
                     </td>
                    
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {kategori.tipe_akademik}
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
                Tambah Muatan Pelajaran
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store }>
                                
                                <div className="field mt-5">
                                    <label className="label">Urutan Muatan Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="urutan"  >
 
 {postsUrutan.map((u)=>  {
       return(<> <option value={u.urutan} > {u.urutan}</option>
               </> 
                   )}
                         )}
 <option value={`${max}`} > {`${max}`}</option>
</select>                     
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">ID Muatan Pelajaran</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={ID} onChange={(e) => setID(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama Mapel</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder= ""value={Muatan} onChange={(e) => setMuatan(e.target.value)} />
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
                Hapus Muatan Pelajaran 
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
            
                  <div className="flex content-center items-center justify-center h-full">
              

                    </div>
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor=""
                    >
                      Hanya Muatan Tanpa Materi Pelajaran yang Bisa dihapus
                    </label>
                </div>
                <form onSubmit={deletePost }>
                                
                                <div className="field mt-5">
                                    <label className="label">Mata Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="delete" >
 
 {posts.map((u)=>  {
       return(<> <option value={u.id} > {u.tipe_akademik}</option>
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
             Ubah Muatan Pelajaran
              </h3>
              <div className="flex content-center items-center justify-center h-full">
          
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={update}>
                                
                                <div className="field mt-5">
                                    <label className="label">Muatan Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="updatemuatan"  onChange={handleChange} >
 
 {postsTipe.map((u)=>  {
       return(<> <option value={u.id} > {u.tipe_akademik}</option>
               </> 
                   )}
                         )}

</select>                     
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Urutan Muatan Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="urutanupdate"  >
                                    <option value={`${UrutanAwal}`}selected disabled hidden>{`${UrutanAwal}`}</option>
 {postsUrutan.map((u)=>  {
       return(<> <option value={u.urutan} > {u.urutan}</option>
               </> 
                   )}
                         )}
 
</select>                     </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">ID Muatan Pelajaran</label>
                                    <div className="controls">
                                        <input type="text" className="input" defaultValue={`${IDAwal}`} id ="IDInput"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama Muatan Pelajaran</label>
                                    <div className="controls">
                                    <input type="text" className="input" defaultValue={`${namaAawal}`} id ="NamaInput" />
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
