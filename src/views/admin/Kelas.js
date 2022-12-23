import React from "react";
import { Link } from "react-router-dom";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
  
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/admin/kelasmurid">
                <CardStats
                
                  statSubtitle="Pendidikan Agama Islam"
                  statTitle="Bu Reni"
                  statDescripiron="Bu Reni"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/admin/kelasmurid">
                <CardStats
                
                  statSubtitle="Bahasa Indonesia"
                  statTitle="Bu Reni"
                  statDescripiron="Bu Reni"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/admin/kelasmurid">
                <CardStats
                
                  statSubtitle="Bahasa Jawa"
                  statTitle="Pak Akbar"
                  statDescripiron="Pak Akbar"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Link to="/admin/kelasmurid">
                <CardStats
                
                  statSubtitle="Matematika"
                  statTitle="Bu Reni"
                  statDescripiron="Bu Reni"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
             
            </div>
          </div>
        
      
    
  );
}
