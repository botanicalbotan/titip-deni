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
  const history = useHistory();
  const  {kelas ,mapel} = useParams();

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
          const responseTipe = await axios.get(`deniex.botanicalbotan.com/api/soal/soal/${mapel}/${kelas}`);
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
const Store = async () => {
  var today = new Date();
  var dd = today.getDate();
  
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var mmm =today.getMinutes();
  var ss = today.getSeconds();
  
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;

let ids = yyyy+'-'+mm+'-'+dd+'-'+hh+'-'+mmm+'-'+ss+'-'+kelas+'-'+mapel

  if (kelas == null || mapel == null){


  }else{
  //send data to server
  await axios.post('deniex.botanicalbotan.com/api/soal/store', {
id_soal : ids,
idmateri: mapel,
idkelas:kelas,
      info: document.getElementById('info').value,
      bab: document.getElementById('bab').value,
  
}
).then(history.push(`/admin/buatpilgan/${ids}`))} 

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
               Buat Tugas
              </h3>
              <form onSubmit={ Store }>
              
              <div className="controls">
              <div class="mb-3 pt-0">
              <div className="field mt-5">
                                    <label className="label">Bab</label>
                                    <div className="controls">
                                        <input  className="border  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                     type="text" id="bab" placeholder="" />
                                    </div>
                                </div>
   </div>
                <label>Info Tugas</label> 
                <div>
<textarea name="fullteks" id="info" cols="40" rows="5" class =" placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"> </textarea>
</div>  </div>    
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

Dafgur.defaultProps = {
  color: "light",
};

Dafgur.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
