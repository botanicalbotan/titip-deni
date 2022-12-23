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

export default function HeaderStats() {
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
            {/* Card stats */}
            <div className="flex flex-wrap">
            {  post.map((u)=>  {
    return (<> 
    
    
    
    
    
    
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="">
                <CardStats
                
                  statSubtitle={u.mapel}
                  statTitle={u.namakelas}
                  statDescripiron={u.namakelas}
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>  </> 
                )}
                      )
        } 
          
          </div>
        </div>
      
    
  );
}
