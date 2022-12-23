import React from "react";

import PropTypes from "prop-types";

// components
import axios from 'axios';

import { useState, useEffect } from 'react';
import { data } from "autoprefixer";
import { useHistory } from "react-router-dom";


export default function Dafgur({ color }) {
  //define state
  const [struktur, setstruktur] = useState([]);
  const [postsmurid, setPostsmurid] = useState([]);
  const [postsTipe, setPostsTipe] = useState([]);
  
  const [selected, setSelected] = useState();
  //function Handle kelas


  const Print = require('print-js')

 


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
  const [postsraport, setPostsRaport] = useState([]);

  const [selectedraport, setSelectedRaport] = useState();


  const handleraport = async event => {
    console.log(event.target.value);
    setSelectedRaport(event.target.value);
    let ujian = document.getElementById('ujian').value
    let semester = document.getElementById('semester').value
    let kelas = document.getElementById('kelas').value
    let murid = document.getElementById('murid').value
    if (ujian == null || semester == null || semester == 0 || ujian ==0 || murid==0 || murid ==null) {

      console.log("ada data kosong")
    }

    else{

    await axios.get(`deniex.botanicalbotan.com/api/raport/setraport/${kelas}/${event.target.value}/${ujian}/${semester}`)
    }setPostsRaport([]);
    setPostssikap1([])
    setPostssikap2([])
    setPostssikap3([])
    setPostssikap4([])
    setPostssikap5([])
    setstruktur([])
   }







   const [selectedraport2, setSelectedRaport2] = useState();


   const handleraport2 = async event => {
     console.log(event.target.value);
     setSelectedRaport2(event.target.value);
     let ujian = document.getElementById('ujian').value
     let semester = document.getElementById('semester').value
     let kelas = document.getElementById('kelas').value
     let murid = document.getElementById('murid').value
     if (ujian == null || semester == null || semester == 0 || ujian ==0 || murid==0 || murid ==null) {
 
       console.log("ada data kosong")
     }
 
     else{
 
     await axios.get(`deniex.botanicalbotan.com/api/raport/setraport/${kelas}/${murid}/${event.target.value}/${semester}`)
     }setPostsRaport([]);
     setstruktur([])
    }


    const [selectedraport3, setSelectedRaport3] = useState();


    const handleraport3 = async event => {
      console.log(event.target.value);
      setSelectedRaport3(event.target.value);
      let ujian = document.getElementById('ujian').value
      let semester = document.getElementById('semester').value
      let kelas = document.getElementById('kelas').value
      let murid = document.getElementById('murid').value
      if (ujian == null || semester == null || semester == 0 || ujian ==0 || murid==0 || murid ==null) {
  
        console.log("ada data kosong")
      }
  
      else{
  
      await axios.get(`deniex.botanicalbotan.com/api/raport/setraport/${kelas}/${murid}/${ujian}/${event.target.value}`)
     
    } setPostsRaport([]);
   
    setstruktur([])
     }




   const [postssikap1, setPostssikap1] = useState([]);
   const [postssikap2, setPostssikap2] = useState([]);
   const [postssikap3, setPostssikap3] = useState([]);
   const [postssikap4, setPostssikap4] = useState([]);
   const [postssikap5, setPostssikap5] = useState([]);
   const handletampil = async event => {
 
    let ujian = document.getElementById('ujian').value
    let semester = document.getElementById('semester').value
    let kelas = document.getElementById('kelas').value
    let murid = document.getElementById('murid').value

 if (ujian && semester && kelas && murid ){

  const strukturkelas = await axios.get(`deniex.botanicalbotan.com/api/raport/struktur/${kelas}`);
  //get response data
  const struktur = await strukturkelas.data.data;

  //assign response data to state "posts"
  setstruktur(struktur);
  const responsemurid = await axios.get(`deniex.botanicalbotan.com/api/raport/tampilraport/${murid}/${kelas}/${ujian}/${semester} `);
  Print({
    printable: 'deniex.botanicalbotan.com/api/raport/cetakraport/231231/11/uts/1',
    type: 'pdf',
    showModal: true, // jadiin false kalo gamau ada loading
    modalMessage: 'Menyiapkan dokumen...',
    onError: (error) =>{
      console.log(error)
      if(error === 'Forbidden'){
        console.log('errof forbiden')
        //swalError('Anda tidak memiliki izin untuk mencetak dokumen ini!', 'Permintaan Ditolak')
      }

      if(error === 'Bad Request'){
        console.log('badrequesy')
        //swalError('Record penjualan tidak valid atau ada masalah saat menyiapkan nota!', 'Permintaan Tidak Valid')
      }
    }
  })
 
  //get response data
  const datamurid = await responsemurid.data.data;

console.log(datamurid)
  setPostsRaport(datamurid);




  const ssikap1 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap1/${murid}`);
  //get response data
  const sikap1 = await ssikap1.data.data;

  //assign response data to state "posts"
  setPostssikap1(sikap1);
  
  const ssikap2 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap2/${murid}`);
  //get response data
  const sikap2 = await ssikap2.data.data;

  //assign response data to state "posts"
  setPostssikap2(sikap2);
  
  const ssikap3 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap3/${murid}`);
  //get response data
  const sikap3 = await ssikap3.data.data;

  //assign response data to state "posts"
  setPostssikap3(sikap3);
  
  const ssikap4 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap4/${murid}`);
  //get response data
  const sikap4 = await ssikap4.data.data;

  //assign response data to state "posts"
  setPostssikap4(sikap4);
  

  const ssikap5 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap5/${murid}`);
  //get response data
  const sikap5 = await ssikap5.data.data;

  //assign response data to state "posts"
  setPostssikap5(sikap5);
  

 }
   }
 
   










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
const Store2 = async (e) => {
  e.preventDefault();
  let sikap = document.getElementById('sikap').value
let sikap2 = document.getElementById('sikap2').value

let murid = document.getElementById('murid').value

  //send data to server
  await axios.patch(`deniex.botanicalbotan.com/api/raport/sikap/${sikap}`, {

   
     NISN : murid,
  nilai:sikap2
})




const ssikap1 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap1/${murid}`);
//get response data
const sikap1 = await ssikap1.data.data;

//assign response data to state "posts"
setPostssikap1(sikap1);

const ssikap2 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap2/${murid}`);
//get response data
const sikap22 = await ssikap2.data.data;

//assign response data to state "posts"
setPostssikap2(sikap22);

const ssikap3 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap3/${murid}`);
//get response data
const sikap3 = await ssikap3.data.data;

//assign response data to state "posts"
setPostssikap3(sikap3);

const ssikap4 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap4/${murid}`);
//get response data
const sikap4 = await ssikap4.data.data;

//assign response data to state "posts"
setPostssikap4(sikap4);


const ssikap5 = await axios.get(`deniex.botanicalbotan.com/api/raport/sikap5/${murid}`);
//get response data
const sikap5 = await ssikap5.data.data;

//assign response data to state "posts"
setPostssikap5(sikap5);
};
   

//method "storePost"
const Store = async (e) => {
  e.preventDefault();
  let ujian = document.getElementById('ujian').value
let semester = document.getElementById('semester').value
let kelas = document.getElementById('kelas').value
let murid = document.getElementById('murid').value
let pengetahuan = document.getElementById('pengetahuan').value
let keterampilan = document.getElementById('keterampilan').value
let mapel = document.getElementById('mapel').value
  //send data to server
  if(ujian && semester && murid && pengetahuan && keterampilan && mapel){
    await axios.patch('deniex.botanicalbotan.com/api/raport/updatedata', {
    ujian : ujian,
     semester : semester,
   
     NISN : murid,
     mapel : mapel,
     pengetahuan : pengetahuan,
     keterampilan : keterampilan
})
  }



const responsemurid = await axios.get(`deniex.botanicalbotan.com/api/raport/tampilraport/${murid}/${kelas}/${ujian}/${semester} `);



//get response data
const datamurid = await responsemurid.data.data;

console.log(datamurid)
setPostsRaport(datamurid);

};
   


 //delete
 //function "deletePost"
 const deletePost = async (e) => {
  e.preventDefault();
  console.log("test")
  let murid = document.getElementById('murid').value
  let ujian = document.getElementById('ujian').value
  let semester = document.getElementById('semester').value
  let kelas = document.getElementById('kelas').value

  console.log (murid+ujian+semester+kelas)
   // //sending
   await axios.patch(`deniex.botanicalbotan.com/api/raport/reset/${murid}/${ujian}/${semester}`) 
  
    //redirect

  
    

const responsemurid = await axios.get(`deniex.botanicalbotan.com/api/raport/tampilraport/${murid}/${kelas}/${ujian}/${semester} `);



//get response data
const datamurid = await responsemurid.data.data;

console.log(datamurid)
setPostsRaport(datamurid);
  
  }
  
  








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
              Nilai Raport
              </h3>
              <select name="selectkelas" id="kelas" value={selected} onChange={handlekelas} className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                       
                      >
              <option value=""  selected="selected" disabled hidden>Pilih Kelas Terlebih Dahulu</option>
        {  postskelas.map((kelas)=>  {
    return (<> <option value={kelas.idkelas} > {kelas.namakelas}</option>
            </> 
                )}
                      )
        } 
      </select>
      <label className="label">    </label>
      <select  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      name="selectujian" id="ujian" value={selectedraport2} onChange={handleraport2} >
              <option value="" selected disabled hidden>Tipe Ujian</option>
              <option value="uts" >UTS</option>
              <option value="uas" >UAS</option>
</select>   
<label className="label">    </label>
<select  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      name="selectsemester" id="semester"value={selectedraport3} onChange={handleraport3}  >
              <option value="" selected disabled hidden>Semester</option>
              <option value="1" >1</option>
              <option value="2" >2</option>
</select>   
<label className="label">    </label>
              <select  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      name="selectsiswa" id="murid"      placeholder=""value={selectedraport} onChange={handleraport}>
              <option value ="0"  selected disabled hidden >Pilih Murid Setelah Memilih Tipe Ujian dan Semester</option>
      
 {postsmurid.map((u)=>  {
       return(<> <option value={u.NISN} > {u.nama}</option>
               </> 
                   )}
                         )}
 
</select>   
 
            </div>
            <label>  </label>
            <label>  </label>
            <label>  </label>
            <div><label>  </label></div>
          </div>  <button 
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
         Nilai Pengetahuan
                </th>
                
            
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
         Nilai Keterampilan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
          Rerata
                </th>
              </tr>
            </thead>
            <tbody> 


      
            {struktur.map((kategori)=>  {

return(<>
  <tr >
      <td   className={
      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
      (color === "light" ? "bg-red-50 text-red-500 border-red-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")}>
      {kategori.tipe_akademik}
      </td> 
  </tr>
  {
                   postsraport.filter((post)=>post.tipe_aka=== kategori.tipe).map((u) => {return(<>
                    <tr >
                  
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              {u.mapel}
                      </td>
                    
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      {u.pengetahuan}
                      </td>
                     
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      {u.keterampilan}
                      </td>
 
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      {u.rerata}
                      </td>
 
 
 
                     </tr> </>)})}</>)})}
  
   
          

              
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
                Input dan Ubah Nilai Raport
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store }>
                                
                                <div className="field mt-5">
                                    <label className="label">Mata Pelajaran</label>
                                    <div className="controls">
                                    <select  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     name="updatemapel" id="mapel"  >
 
 {postsraport.map((u)=>  {
       return(<> <option value={u.id_mapel} > {u.mapel}</option>
               </> 
                   )}
                         )}
 
</select>   
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai Pengetahuan</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="pengetahuan" placeholder="" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai Keterampilan</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="keterampilan" placeholder="" />
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
              Ulang semua nilai ke posisi default
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
                 Nilai Sikap
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
               Sikap
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
           Nilai 
                  </th>
                  
              
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
          Keterangan
                  </th>
               
                </tr>
              </thead>
              <tbody> 
  
  
       
              <tr >
              <td   className={
      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
      (color === "light" ? "bg-red-50 text-red-500 border-red-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")}>
       Sikap Spiritual
                  </td></tr>
        {postssikap1.map((u)=>  {
  
    return(<>
   
                     <tr >
                   
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Ketaatan Beribadah
                       </td>
                     
                       <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                       {u.nilai}
                       </td>
                      
                       <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                       {u.keterangan}
                       </td>
  
                    
  
  
                      </tr>   </>)})}
                   
                      {postssikap2.map((u)=>  {
  
  return(<>
 
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Berperilaku Syukur
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.nilai}
                     </td>
                    
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.keterangan}
                     </td>

                  


                    </tr>   </>)})}   <tr >
                      <td   className={
      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
      (color === "light" ? "bg-red-50 text-red-500 border-red-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")}>
       Sikap Sosial
                  </td></tr>
                    {postssikap3.map((u)=>  {
  
  return(<>
 
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Jujur
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.nilai}
                     </td>
                    
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.keterangan}
                     </td>

                  


                    </tr>   </>)})}
                    {postssikap4.map((u)=>  {
  
  return(<>
 
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Disiplin
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.nilai}
                     </td>
                    
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.keterangan}
                     </td>

                  


                    </tr>   </>)})}
                    {postssikap5.map((u)=>  {
  
  return(<>
 
                   <tr >
                 
                    <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
           Tanggung Jawab
                     </td>
                   
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.nilai}
                     </td>
                    
                     <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     {u.keterangan}
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
                Input dan Ubah Nilai Sikap
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store2 }>
                                
                                <div className="field mt-5">
                                    <label className="label">Mata Pelajaran</label>
                                    <div className="controls">
                                    <select name="updatesikap" id="sikap"  >
 
 <option value="sikap1" > Ketaatan Beribadah</option>
       
 <option value="sikap2" > Berperilaku Syukur</option>
 
 <option value="sikap3" > Jujur</option>
 
 <option value="sikap4" > Disiplin</option>
 
 <option value="sikap5" > Tanggung Jawab</option>     
 
</select>   
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai</label>
                                    <div className="controls">
                                    <select name="updatesikap2" id="sikap2"  >
 
 <option value="A" > A</option>
       
 <option value="B" > B</option>
 
 <option value="C" > C</option>
 
 <option value="D" > D  </option>
 

 
</select>   
</div></div>
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
                Ketidak Hadiran
              </h3>
              <div className="flex content-center items-center justify-center h-full">
            
             
                    </div>
                    <div className="relative w-full mb-3">
                    <form onSubmit={ Store }>
                                
                                <div className="field mt-5">
                                    <label className="label">Sakit</label>
                                    <div className="controls">
                                    <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="keterampilan" placeholder="" />
                       
</div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Izin</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="pengetahuan" placeholder="" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Tanpa Keterangan</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="keterampilan" placeholder="" />
                                    </div>
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
            Cetak Raport Setelah Data Terisi
              </h3>
              <div className="flex content-center items-center justify-center h-full">
              
            
                  <div className="flex content-center items-center justify-center h-full">
              

                    </div>
                    
                </div>
                <form onSubmit={deletePost }>
                                
                           
                               
                              
                                <div className="field mt-5">
                                <button 
                   className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex font-bold text-xs ease-linear transition-all duration-150"
                     type="button"  onClick={handletampil}  
                  >
                    CETAK RAPORT
                  </button>       </div>
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
