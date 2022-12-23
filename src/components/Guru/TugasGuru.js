import React from "react";


// components

import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// components


import { useHistory } from "react-router-dom";



  

import CardStats from "components/Cards/CardStats.js";
import Ekskul from "components/Cards/Ekskul.js";

export default function TugasGuru({ color }) {
    //define state
    const [post, setPost] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectMapel();

    }, []);

    //function "fetchData"


     const NISN = 33  
    const fectMapel = async () => {
        //fetching
    
        const response = await axios.get(`deniex.botanicalbotan.com/api/dataguru/get/matpelguru/${NISN}`);
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        console.log(data)
        setPost(data);
    }











  return (
    <div>
    
   
  <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
               
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            {  post.map((u)=>  {
    return (<> 
    
    
    
    
    
    
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div>
              <Link to={`/admin/listtugasguru/${u.idkelas}/${u.idmateri}`} >
                <CardStats
                
                  statSubtitle={u.mapel}
                  statTitle={u.namakelas}
                  statDescripiron={u.namakelas}
                  statIconName=""
                  statIconColor=""
                />
                </Link>
               <p>&nbsp;</p>
              </div> </div> </> 
                )}
                      )
        } 
          
          </div>
        </div>
      </div>
      </div>
    </div></div>
    </div>
    
  );
}
TugasGuru.defaultProps = {
  color: "light",
};

TugasGuru.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};