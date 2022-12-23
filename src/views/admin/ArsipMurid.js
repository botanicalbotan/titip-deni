import React from "react";
import { Link } from "react-router-dom";

// components

import CardStats from "components/Cards/ArsipMurid";

export default function HeaderStats() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardStats />
        </div>
       
      </div>
    </>
  );
}
