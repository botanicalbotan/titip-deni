import React from "react";
import { Link } from "react-router-dom";

// components
import Absensi from "components/Cards/ListTagihan";

export default function Absen() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Absensi />
        </div>
       
      </div>
    </>
  );
}