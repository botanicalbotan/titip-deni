import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';



export default function Materi({ color }) {










  const [mapelAwal, setMapelAwal] = useState('');
  const [namaAawal, setNamaAwal] = useState('');







  const handleChange = async event => {
    console.log(event.target.value);
    setSelected(event.target.value);
     //get data from server
     const response = await axios.get(`deniex.botanicalbotan.com/api/akademik_a/${event.target.value}`);
     //get response data
     const data = await response.data.data

     //assign data to state
     setMapelAwal(data[0].id_mapel);
    setNamaAwal(data[0].mapel);

    console.log(data)
    console.log(namaAawal + mapelAwal)
  };
  
  
  
  const [selected, setSelected] = useState();
  
  








  

    //define state
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"


     
    const fectData = async () => {
        //fetching
    
        const response = await axios.get(`deniex.botanicalbotan.com/api/akademik_a/tes3`);
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        console.log(data)
        setPosts(data);
    }

   
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBB
      



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
 const [JamUpdate, setJamUpdate] = useState('');
 




 const UpdateJam = async (e) => {

  e.preventDefault();

  //send data to server
  await axios.patch(`deniex.botanicalbotan.com/api/akademik_a/updatejam/`, {
      kelas : document.getElementById('updatekelas').value,
      jam: JamUpdate,
      id: document.getElementById('updatemapel1').value,
 })
 const responseTipe = await axios.get('deniex.botanicalbotan.com/api/akademik_a');
        //get response data
        const dataTipe = await responseTipe.data.data;

        //assign response data to state "posts"
        setPosts(dataTipe);
  
};

  


const UpdateNama = async (e) => {
console.log("cek")
console.log(document.getElementById('namaawal').value,)
console.log(document.getElementById('updatemapel2').value,)
console.log(document.getElementById('mapelawal').value,)

e.preventDefault();

//send data to server
await axios.patch(`deniex.botanicalbotan.com/api/akademik_a/updatenama/`, {
    nama : document.getElementById('namaawal').value,
    id: document.getElementById('updatemapel2').value,
    idbaru : document.getElementById('mapelawal').value,
    
})


const responseTipe = await axios.get('deniex.botanicalbotan.com/api/akademik_a');
        //get response data
        const dataTipe = await responseTipe.data.data;

        //assign response data to state "posts"
        setPosts(dataTipe);
};





      

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
  
 //state validation
 const [validation, setValidation] = useState({});

 

 //method "storePost"
 const storePost = async (e) => {
     e.preventDefault();
     
     //send data to server
     await axios.post('deniex.botanicalbotan.com/api/akademik_a/store', {
         id_mapel : IdInput,
         mapel: MapelInput,
         kelas1: Kelas1Input,
         kelas2: Kelas2Input,
         kelas3: Kelas3Input,
         kelas4: Kelas4Input,
         kelas5: Kelas5Input,
         kelas6: Kelas6Input,
         tipe_aka: document.getElementById('kategori').value,
     })
     .then(() => {

      

     })
     .catch((error) => {

         //assign validation on state
         setValidation(error.response.data);
     })
     
 };
      
 //delete
 //function "deletePost"
const deletePost = async (id_mapel) => {

  //sending
  await axios.delete(`deniex.botanicalbotan.com/api/akademik_a/delete/${id_mapel}`)
  const response = await axios.get(`deniex.botanicalbotan.com/api/akademik_a/tes3`);
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        console.log(data)
        setPosts(data);
    


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
                ID Kelas
                </th>
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
                Kelas 1
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Kelas 2
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Kelas 3
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Kelas 4
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Kelas 5
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Kelas 6
                </th>
             
                
              
              </tr>
            </thead>
            <tbody> 


     
       
     {postsTipe.map((kategori)=>  {

return(<>
  <tr >
      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></td>
      <td   className={
      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
      (color === "light" ? "bg-red-50 text-red-500 border-red-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")}>
      {kategori.tipe_akademik}
      </td> 
  </tr>
  {
                   posts.filter((post)=>post.tipe_aka=== kategori.id).map((post) => {return(<>
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
             {post.id_mapel }
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post.mapel}
                     </td>
                    
                  
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {post.kelas1}
                     </td>
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     
                     {post.kelas2}
                     
                     </td>
                   
                  
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     
                     {post.kelas3}
                    
                    </td>
                  
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     
                    {post.kelas4}
                    
                    </td>
                  
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     
                    {post.kelas5}
                    
                    </td>
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     
                    {post.kelas6}
                    
                    </td> <td>
               <button onClick={() => deletePost(post.id_mapel)} variant="danger" size="sm">DELETE</button>
  
               </td>
         



                    </tr>   </>)})}
  </>)

                  
             
                 }
                   
              )}
      
          

              
          

              
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
                Tambah Materi
              </h3>  





              <form onSubmit={ storePost }>
                                
                                <div className="field mt-5">
                                    <label className="label">ID Mapel</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder=" "required="required"
                                            value={IdInput} onChange={(e) => setId(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama Mata Pelajaran</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={MapelInput} onChange={(e) => setMapel(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 1 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={Kelas1Input} onChange={(e) => setKelas1(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 2 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={Kelas2Input} onChange={(e) => setKelas2(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 3 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={Kelas3Input} onChange={(e) => setKelas3(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 4 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={Kelas4Input} onChange={(e) => setKelas4(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 5 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={Kelas5Input} onChange={(e) => setKelas5(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran Kelas 6 / Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={Kelas6Input} onChange={(e) => setKelas6(e.target.value)} />
                                    </div>
                                </div>
                                
                                <div className="field mt-5">
                                    <label className="label">Muatan Lokal</label>
                                    <div className="controls">
                                    <select name="tipe_aka" id="kategori" >
 
                                            {postsTipe.map((kategori)=>  {
                                                  return(<> <option value={kategori.id} > {kategori.tipe_akademik}</option>
                                                          </> 
                                                              )}
                                                                    )}
                          
                                    </select>                     
                               
                                    
                                    </div>
                                  </div>
                              
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" variant="primary" type="submit" >Register</button>
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
         
            <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Tipe Muatan 
              </h3>
           
                    
                    </div>
                    
                </div>
              
                    <div className="btn-wrapper text-center">
                    <Link to={`/admin/tipeakademik`}>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                   
                    Klik Disini Untuk Mengatur Tipe Muatan Pelajaran
                  </button>

                  </Link>
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
               Ubah Jam Per Minggu
              </h3>
              <div className="flex content-center items-center justify-center h-full">
          
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ UpdateJam }>
                                
                                <div className="field mt-5">
                                    <label className="label">Mata Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="updatemapel1" >
 
 {posts.map((kelas)=>  {
       return(<> <option value={kelas.id_mapel} > {kelas.mapel}</option>
               </> 
                   )}
                         )}

</select>                     
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Kelas</label>
                                    <div className="controls">
                                    <select name="updatekelas" id="updatekelas" >
                                    <option value='kelas1' > Kelas1</option>
                                    <option value='kelas2' > Kelas2</option>
                                    <option value='kelas3' > Kelas3</option>
                                    <option value='kelas4' > Kelas4</option>
                                    <option value='kelas5' > Kelas5</option>
                                    <option value='kelas6' > Kelas6</option>

                                      </select>
                                                      </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jam Pelajaran/ Minggu</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="" value={JamUpdate} onChange={(e) => setJamUpdate(e.target.value)} />
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
            <div className="flex content-center items-center justify-center h-full">
            <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Ubah Nama dan Kode Mata Pelajaran
              </h3>
           
              
                    
                    </div>
                    
                </div>
                <form onSubmit={ UpdateNama }>
                                
                                <div className="field mt-5">
                                    <label className="label">Mata Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatemapel" id="updatemapel2" onChange={handleChange} >
 
 {posts.map((kelas)=>  {
       return(<> <option value={kelas.id_mapel} > {kelas.mapel}</option>
               </> 
                   )}
                         )}

</select>                     
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">ID Mapel</label>
                                    <div className="controls">
                                        <input type="text" className="input" id="mapelawal" defaultValue={`${mapelAwal}`} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama Mapel</label>
                                    <div className="controls">
                                        <input type="text" className="input" id="namaawal" defaultValue={`${namaAawal}`} />
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
          
            

    </>
  );
}

Materi.defaultProps = {
  color: "light",
};

Materi.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};