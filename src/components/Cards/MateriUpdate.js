import React, { useRef, useState , useEffect} from "react";
import axios from 'axios';
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";

export default function MateriUpdate({ color }) {






const  {id ,namatipe} = useParams();



    //define state
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"



 //function "getPostById"
 const fectData = async() => {

  //get data from server
  const response = await axios.get(`deniex.botanicalbotan.com/api/akademik_a/${id}`);
  //get response data
  const data = await response.data.data
  setPosts(data);
  console.log("datanya")
  console.log(data)
 
};








  const put_id_mapel = useRef(null);
  const put_mapel = useRef(null);
  const put_kelas1 = useRef(null);
  const put_kelas2 = useRef(null);
  const put_kelas3 = useRef(null);
  const put_kelas4 = useRef(null);
  const put_kelas5 = useRef(null);
  const put_kelas6 = useRef(null);
  const put_tipe_aka = useRef(null);
  
  const [putResult, setPutResult] = useState(null);
  const history = useHistory();

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function putData() {
    

    if (id) {
      const putData = {
        id_mapel: put_id_mapel.current.value,
        mapel: put_mapel.current.value,
        kelas1: put_kelas1.current.value,
        kelas2: put_kelas2.current.value,
        kelas3: put_kelas3.current.value,
        kelas4: put_kelas4.current.value,
        kelas5: put_kelas5.current.value,
        kelas6: put_kelas6.current.value,
        tipe_aka: put_tipe_aka.current.value,
      };

      try {
        const res = await axios.patch(`deniex.botanicalbotan.com/api/akademik_a/update/${id}`, putData, {
          headers: {
            "x-access-token": "token-value",
          },
        }) .then(() => {

          //redirect
          history.push('/admin/dafgur');
 
      })
        
        
        
        
        ;

        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        setPutResult(fortmatResponse(result));
      } catch (err) {
        setPutResult(fortmatResponse(err.response?.data || err));
      }
    }
  }

  const clearPutOutput = () => {
    setPutResult(null);
  };


  return (

    



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
            Update Materi
          </h3>
        </div>
      </div>
    </div>


    
        
        <div className="card-header">Edit data ID : {id}</div>
        <div className="card-header">Edit data Nama Tipe : {namatipe}</div>
  
          
            <input type="text" className="form-control" ref={put_id_mapel} placeholder=""/>
     
            <input type="text" className="form-control" ref={put_mapel} placeholder=""  />
         
            <input type="text" className="form-control" ref={put_kelas1} placeholder=""/>
        
            <input type="text" className="form-control" ref={put_kelas2} placeholder="" />
      
            <input type="text" className="form-control" ref={put_kelas3} placeholder=""/>
        
            <input type="text" className="form-control" ref={put_kelas4} placeholder="" />
       
            <input type="text" className="form-control" ref={put_kelas5} placeholder="" />
      
            <input type="text" className="form-control" ref={put_kelas6} placeholder=""  />
   

            <input type="text" className="form-control" ref={put_tipe_aka} placeholder="" />

       







          
          <button className="btn btn-sm btn-primary" onClick={putData}>Update Data</button>
          <button className="btn btn-sm btn-warning ml-2" onClick={clearPutOutput}>Clear</button>

          { putResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{putResult}</pre></div> }
      </div>
      








     
    
  );
}


MateriUpdate.defaultProps = {
  color: "light",
};

MateriUpdate.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
