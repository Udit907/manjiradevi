import React from 'react';

import './App.css';
import Aos from 'aos'; /* Aos for Aos animations */
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Footer from './Component/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Component/Home';
import About from './Component/About/About';
import Program from './Component/Program/Program';
import Contact from './Component/Contact/Contact';
import OurSchool from './Component/OurSchool/OurSchool';
import Admission from './Component/Admission/Admission';
import Academics from './Component/Academics/Academics';
import Research from './Component/Research/Research';
import Layout from './Component/Layout/Layout';
import Lifemanjira from './Component/Lifemanjira/Lifemanjira';
import Vision from './Component/About/vision';
import Engineer from './Component/Engineer/Engineer';
import School1 from './Component/Engineer/School1';
import Mechanic from './Component/Engineer/Mechanic';
import Cse from './Component/Engineer/Cse';
import School2 from './Component/Science/School2';
import Nursing from './Component/Nursing/Nursing';


import  Ai from './Component/Science/Ai';
import Bca from './Component/Science/Bca';
import Bsc from './Component/Science/Bsc';
import Cyber from './Component/Science/Cyber';
import Data from './Component/Science/Data';
import Foresic from './Component/Science/Foresic';
import Mca from './Component/Science/Mca';
import Msc from './Component/Science/Msc';
import School3 from './Component/Commerce/School3';
import Gnm from './Component/Nursing/Gnm';
import Pharma from './Component/Nursing/Pharma';
import Bpharma from './Component/Nursing/Bpharma';
import Anm from './Component/Nursing/Anm';
import Bpt from './Component/Nursing/Bpt';
import Mph from './Component/Nursing/Mph';
import Bnys from './Component/Yogicscience/Bnys';
import Bscyogic from './Component/Yogicscience/Bscyogic';
import Mscyogic from './Component/Yogicscience/Mscyogic';
import Mayogic from './Component/Yogicscience/Mayogic';
import Phdyogic from './Component/Yogicscience/Phdyogic';
import Pgdyogic from './Component/Yogicscience/Pgdyogic';
import BaArts from './Component/ArtsHumanity/BaArts';
import Msccp from './Component/Nursing/Msccp';
import Bba from './Component/Commerce/Bba';
import Bcom from './Component/Commerce/Bcom';
import Mba from './Component/Commerce/Mba';
import Mcom from './Component/Commerce/Mcom';
import Phd from './Component/Commerce/Phd';
import School4 from './Component/Agriculture/School4';
import Diploma from './Component/Agriculture/Diploma';
import BscAgr from './Component/Agriculture/BscAgr';
import MscAgr from './Component/Agriculture/MscAgr';
import MscHor from './Component/Agriculture/MscHor';
import Artsschool from './Component/ArtsHumanity/Artsschool';
import Maarts from './Component/ArtsHumanity/Maarts';
import Phdarts from './Component/ArtsHumanity/Phdarts';
import Bedarts from './Component/ArtsHumanity/Bedarts';
import Yogicschool from './Component/Yogicscience/Yogicschool';
import Nursingschool from './Component/Nursing/Nursingschool';
import Legalschool from './Component/LegalStudies/Legalschool';
import Ballb from './Component/LegalStudies/Ballb';
import Llb from './Component/LegalStudies/Llb';
import Hotelschool from './Component/HotelMangement/Hotelschool';
import Diplomahm from './Component/HotelMangement/Diplomahm';
import  Bachelorhm from './Component/HotelMangement/Bachelorhm';
import Bbatourism from './Component/HotelMangement/Bbatourism';
import Phdnotification from './Component/Notification/Phdnotification';
import Bednotification from './Component/Notification/Bednotification';
import Entrance from './Component/Notification/Entrance';
import Electrical from './Component/Engineer/Electrical';
import Computer from './Component/Engineer/Computer';
import Blibarts from './Component/ArtsHumanity/Blibarts';
import Mlibarts from './Component/ArtsHumanity/Mlibarts';
import Certificateyoga from './Component/Yogicscience/Certificateyoga';

import Msg from './Component/About/Msg';
import Registarmsg from './Component/About/Registarmsg';
import Visemsg from './Component/About/Visemsg';
import Enquiryform from './Component/Admission/Enquiryform';
import Placement from './Component/Placement/Placement';
import { useEffect } from 'react';
import ScrollToTop from './Component/ScrollToTop';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Router>
        <Nav/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="program" element={<Program/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="school" element={<OurSchool/>}/>
          <Route path="admission" element={<Admission/>}/>
          <Route path="academics" element={<Academics/>}/>
          <Route path="gallery1" element={<Research/>}/>
          <Route path="layout" element={<Layout/>}/>
          <Route path="lifemanjira" element={<Lifemanjira/>}/>
          <Route path="vision" element={<Vision/>}/>
          <Route path ="school1" element={<School1/>}/>
          <Route path ="engineer" element={<Engineer/>}/>
          <Route path ="mechanic" element={<Mechanic/>}/>
          <Route path ="cse" element={<Cse/>}/>
          <Route path ="school2" element={<School2/>}/>
          <Route path="nursing" element={<Nursing/>}/>
          <Route path="bca" element={<Bca/>}/>
          <Route path="bsc" element={<Bsc/>}/>
          <Route path='ai' element={<Ai/>}/>
          <Route path="cyber" element={<Cyber/>}/>
          <Route path="data" element={<Data/>}/>
          <Route path="foresic" element={<Foresic/>}/>
          <Route path="mca" element={<Mca/>}/>
          <Route path="msc" element={<Msc/>}/>
          <Route path='school3' element={<School3/>}/>
          <Route path="msccp" element={<Msccp/>}/>
          <Route path="gnm" element={<Gnm/>}/>
          <Route path="dpharma" element={<Pharma/>}/>
          <Route path="bpharma" element={<Bpharma/>}/>
          <Route path="anm" element={<Anm/>}/>
          <Route path="bpt" element={<Bpt/>}/>
          <Route path="mph" element={<Mph/>}/>
          <Route path="bnys" element={<Bnys/>}/>
          <Route path="bscyogic" element={<Bscyogic/>}/>
          <Route path="mscyogic" element={<Mscyogic/>}/>
          <Route path="mayogic" element={<Mayogic/>}/>
          <Route path="phdyogic" element={<Phdyogic/>}/>
          <Route path="pgdyogic" element={<Pgdyogic/>}/>
          <Route path="baarts" element={<BaArts/>}/>
          <Route path='bba' element={<Bba/>}/>
          <Route path='bcom' element={<Bcom/>}/>
          <Route path='mba' element={<Mba/>}/>
          <Route path='mcom' element={<Mcom/>}/>
          <Route path='phd' element={<Phd/>}/>
          <Route path='school4' element={<School4/>}/>
          <Route path='diploma' element={<Diploma/>}/>
          <Route path='bscagr' element={<BscAgr/>}/>
          <Route path='mscagr' element={<MscAgr/>}/>
          <Route path='mschor' element={<MscHor/>}/>
          <Route path='artsschool' element={<Artsschool/>}/>
          <Route path='maarts' element={<Maarts/>}/>
          <Route path='phdarts' element={<Phdarts/>}/>
          <Route path='bedarts' element={<Bedarts/>}/>
          <Route path='yogicschool' element={<Yogicschool/>}/>
          <Route path='yogicbnys' element={<Bnys/>}/>
          <Route path='yogicbsc' element={<Bscyogic/>}/>
          <Route path='yogicma' element={<Mayogic/>}/>
          <Route path='yogicmsc' element={<Mscyogic/>}/>
          <Route path='yogicphd' element={<Phdyogic/>}/>
          <Route path='yogicpgd' element={<Pgdyogic/>}/>
          <Route path='nursingschool' element={<Nursingschool/>}/>
          <Route path='nursingbsc' element={<Nursing/>}/>
          <Route path='nursingbpt' element={<Bpt/>}/>
          <Route path='nursinggnm' element={<Gnm/>}/>
          <Route path='nursinganm' element={<Anm/>}/>
          <Route path='nursingmsc' element={<Msccp/>}/>
          <Route path='nursingbpharma' element={<Bpharma/>}/>
          <Route path='nursingdpharma' element={<Pharma/>}/>
          <Route path='nursingmph' element={<Mph/>}/>
          <Route path='schoollegal' element={<Legalschool/>}/>
          <Route path='legalllb' element={<Llb/>}/>
          <Route path='legalballb' element={<Ballb/>}/>
          <Route path='hotelschool' element={<Hotelschool/>}/>
          <Route path='hotelbba' element={<Bbatourism/>}/>
          <Route path='hoteldiploma' element={<Diplomahm/>}/>
          <Route path='hotelbhm' element={<Bachelorhm/>}/>
          <Route path='phdpdf' element={<Phdnotification/>}/>
          <Route path='bedpdf' element={<Bednotification/>}/>
          <Route path='entrancepdf' element={<Entrance/>}/>
          <Route path='electrical' element={<Electrical/>}/>
          <Route path='computer' element={<Computer/>}/>
          <Route path='blibarts' element={<Blibarts/>}/>
          <Route path='mlibarts' element={<Mlibarts/>}/>
          <Route path='certificateyoga' element={<Certificateyoga/>}/>
          <Route path='msg' element={<Msg/>}/>
          <Route path='registarmsg' element={<Registarmsg/>}/>
          <Route path='visemsg' element={<Visemsg/>}/>
          <Route path='enquiryform' element={<Enquiryform/>}/>
          <Route path="placement" element={<Placement/>}/>
</Routes>
      
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
