import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Kelas from "views/admin/Kelas";
import KelasGuru from "views/admin/KelasGuru";
import NilaiKelas from "views/admin/TugasGuru";
import NotifAdmin from "views/admin/NotifAdmin";
import Tagihan from "views/admin/Tagihan";
import TagihAdmin from "views/admin/TagihAdmin";
import Jadwal from "views/admin/Jadwal.js";
import ListArsip from "views/admin/ListArsip";
import Absen from "views/admin/Absen.js";
import Absensi from "views/admin/Absensi.js";
import History from "views/admin/History.js";
import Dafgur from "views/admin/Dafgur.js";
import Materi from "views/admin/Materi.js";
import Murid from "views/admin/Murid.js";
import EkskulMurid from "views/admin/MuridEkskul.js";
import MateriUpdate from "views/admin/MateriUpdate.js";


import KelasMurid from "views/admin/KelasMurid.js";
import NilaiTugas from "views/admin/NilaiTugas";
import ArsipMurid from "views/admin/ArsipMurid.js";
import InputSemester from "views/admin/InputSemester";
import LihatSurat from "views/admin/LiatSuratTugas";
import UpdatePayment from "views/admin/UpdatePembayaran";
import ListTagihan from "views/admin/ListTagihan";
import InfaqInput from "views/admin/InfaqInput";
import ListInfaq from "views/admin/ListInfaq";
import InputAkademik from "views/admin/InputAkademik";
import TipeAkademik from "views/admin/TipeAkademik";
import KelasAdmin from "views/admin/KelasAdmin";

import SidebarAdmin from "components/Sidebar/SidebarAdmin.js";
import SidebarGuru from "components/Sidebar/SidebarGuru";
import SidebarAdministrasi from "components/Sidebar/SidebarAdministrasi";
import JadwalAdmin from "components/Cards/JadwalAdmin";
import KelasMateri from "components/Cards/KelasGuru";
import EkskulGuru from "components/Cards/EkskulGuru";
import TugasGuru from "components/Guru/TugasGuru";
import MateriGuru from "components/Guru/MateriGuru";
import NilaiGuru from "components/Guru/NilaiGuru";
import BuatSoal from "components/Guru/BuatSoal";

import ListTugasGuru from "components/Guru/ListTugasGuru";
import UploadMateri from "components/Cards/UploadMateri";
import BuatPilgan from "components/Guru/Pilgan";
import BuatEssai from "components/Cards/BuatEssai";
import KoreksiEssai from "components/Cards/KoreksiEssai";
import Raport from "components/Cards/Raport";
import StrukturGuru from "components/Cards/StrukturGuru";


export default function Admin() {
  var a=3;  
if(a==1){  


  return (
    <>

    
     <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
             <Route path="/admin/dafgur" exact component={Dafgur} />
             <Route path="/admin/abs" exact component={Absen} />
             <Route path="/admin/materi" exact component={Materi} />
            <Route path="/admin/kelas" exact component={Kelas} />
            <Route path="/admin/tagihan" exact component={Tagihan} />
            <Route path="/admin/history" exact component={History} />
            <Route path="/admin/jadwal" exact component={Jadwal} />
            <Route path="/admin/absen" exact component={Absensi} />
            <Route path="/admin/kelasmurid" exact component={KelasMurid} />
            <Route path="/admin/tugasguru" exact component={TugasGuru} />
            <Redirect from="/admin" to="/admin/kelas" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );}
  else if (a == 2) {  
    
  return (
    <>

    
<SidebarAdmin />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
             <Route path="/admin/dafgur" exact component={Dafgur} />
             <Route path="/admin/materi" exact component={Materi} />
             <Route path="/admin/materiupdate/:id/:namatipe" exact component={MateriUpdate} />
             <Route path="/admin/listarsip" exact component={ListArsip} />
             <Route path="/admin/abs" exact component={Absen} />
             <Route path="/admin/notifadmin" exact component={NotifAdmin} />
            <Route path="/admin/kelas" exact component={Kelas} />
            <Route path="/admin/tagihan" exact component={Tagihan} />
            <Route path="/admin/history" exact component={History} />
            <Route path="/admin/jadwaladmin" exact component={JadwalAdmin} />
            <Route path="/admin/absen" exact component={Absensi} />
            <Route path="/admin/arsipmurid" exact component={ArsipMurid} />
            <Route path="/admin/murid" exact component={Murid} />
            <Route path="/admin/tugasguru" exact component={TugasGuru} />
            <Route path="/admin/tagihadmin" exact component={TagihAdmin} />
            <Route path="/admin/updatepembayaran" exact component={UpdatePayment} />
            <Route path="/admin/inputakademik" exact component={InputAkademik} />
            <Route path="/admin/tipeakademik" exact component={TipeAkademik} />
            <Route path="/admin/kelasadmin" exact component={KelasAdmin} />
            <Route path="/admin/raport" exact component={Raport} />
            <Route path="/admin/strukturguru" exact component={StrukturGuru} />
            <Redirect from="/admin" to="/admin/dafgur" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );  
    }  
    else if (a == 3) 
    { return (
      <>
       <SidebarGuru />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
               <Route path="/admin/dafgur" exact component={Dafgur} />
               <Route path="/admin/materi" exact component={Materi} />
               <Route path="/admin/abs" exact component={Absen} />
               <Route path="/admin/muridekskul" exact component={EkskulMurid} />
              <Route path="/admin/kelas" exact component={Kelas} />
              <Route path="/admin/kelasmateri" exact component={KelasMateri} />
              <Route path="/admin/kelasguru" exact component={KelasGuru} />
              <Route path="/admin/ekskulguru" exact component={EkskulGuru} />
              <Route path="/admin/tagihan" exact component={Tagihan} />
              <Route path="/admin/history" exact component={History} />
              <Route path="/admin/jadwal" exact component={Jadwal} />
              <Route path="/admin/absen" exact component={Absensi} />
              <Route path="/admin/nilaitugas" exact component={NilaiTugas} />
              <Route path="/admin/tugasguru" exact component={TugasGuru} />
              <Route path="/admin/inputsemester" exact component={InputSemester} />
              <Route path="/admin/surattugas" exact component={LihatSurat} />
              <Route path="/admin/uploadmateri" exact component={UploadMateri} />
              <Route path="/admin/buatpilgan" exact component={BuatPilgan} />
              <Route path="/admin/buatessai" exact component={BuatEssai} />
              <Route path="/admin/materiguru" exact component={MateriGuru} />
              <Route path="/admin/nilaiguru" exact component={NilaiGuru} />
              <Route path="/admin/listtugasguru/:kelas/:mapel" exact component={ListTugasGuru} />
              <Route path="/admin/nilaiguru" exact component={NilaiGuru} />
              <Route path="/admin/buatsoal/:kelas/:mapel" exact component={BuatSoal} />
              <Route path="/admin/buatsoal/:kelas/:mapel" exact component={BuatSoal} />
              <Route path="/admin/buatpilgan/:idsoal" exact component={BuatPilgan} />
              
              <Route path="/admin/koreksiessai" exact component={KoreksiEssai} />
              <Redirect from="/admin" to="/admin/kelasguru" />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );  }

     
   
}
