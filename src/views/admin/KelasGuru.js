import React from "react";
import { Link } from "react-router-dom";

// components

import CardStats from "components/Cards/CardStats.js";
import Ekskul from "components/Cards/Ekskul.js";
export default function HeaderStats() {
  return (
  
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/admin/kelasmateri">
                <CardStats
                
                  statSubtitle="Tema 1"
                  statTitle="Kelas"
                  statDescripiron="Kelas"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/admin/kelasmateri">
                <CardStats
                
                  statSubtitle="Tema 1"
                  statTitle="Kelas"
                  statDescripiron="Kelas"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/admin/kelasmateri">
                <CardStats
                
                  statSubtitle="Tema 1"
                  statTitle="Kelas"
                  statDescripiron="Kelas"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Link to="/admin/kelasmateri">
                <CardStats
                
                  statSubtitle="Tema 1"
                  statTitle="Kelas"
                  statDescripiron="Kelas"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/admin/ekskulguru">
                <Ekskul
                
                  statSubtitle="Tema 1"
                  statTitle="Kelas"
                  statDescripiron="Kelas"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-green"
                />
                </Link>
              </div>
            </div>
          </div>
        
      
    
  );
}
