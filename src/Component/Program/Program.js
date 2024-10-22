import React, { useState } from 'react';
import './program.css';
import { Link } from 'react-router-dom';

function Program() {
  const [selectedProgram, setSelectedProgram] = useState('UNDERGRADUATE');

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const programs = {
    UNDERGRADUATE: [
      { school: 'School of Science And Technology', courses: [{ name: 'B.Sc', url: '/bsc' }, { name: 'BCA', url: '/bca' }] },
      { school: 'School Of Commerce And Management Studies', courses: [{ name: 'B.Com', url: '/bcom' }, { name: 'BBA', url: '/bba' }] },
      { school: 'School of Agriculture', courses: [{ name: 'B.Sc (Agriculture)', url: '/bscagr' }] },
      { school: 'School of Arts and Humanities', courses: [{ name: 'BA (Hindi/Sanskrit/English/Sociology/Education/Political Science/History/Economics)', url: '/baarts' }] },
      { school: 'School of Yogic Science and Naturopathy', courses: [{ name: 'BNYS', url: '/yogicbnys' }, { name: 'BSC', url: '/yogicbsc' }] },
      { school: 'School of Nursing Paramedical & Allied Science', courses: [{ name: 'B.Pharma', url: '/School of Nursing and Paramedical Science' }, { name: 'B.Sc Nursing', url: '/nursingbsc' }, { name: 'BPT', url: '/nursingbpt' }] },
      { school: 'School of Legal Studies', courses: [{ name: 'BALLB', url: '/legalballb' }, { name: 'LLB', url: '/legalllb' }] },
      { school: 'School of Hotel Management & Tourism', courses: [{ name: 'Bachelor of Hotel Management', url: '/hotelbhm' }, { name: 'BBA - Tourism', url: '/hotelbba' }] },
    ],
    POSTGRADUATE: [
      { school: 'School of Science And Technology', courses: [{ name: 'M.Sc', url: '/msc' }, { name: 'MCA', url: '/mca' }] },
      { school: 'School Of Commerce And Management Studies', courses: [{ name: 'M.Com', url: '/mcom' }, { name: 'MBA', url: '/mba' }, { name: 'Ph.D', url: '/phd-commerce' }] },
      { school: 'School of Agriculture', courses: [{ name: 'M.Sc in Agriculture', url: '/mscagr' }, { name: 'M.Sc in Horticulture', url: '/mschor' }] },
      { school: 'School of Arts and Humanities', courses: [{ name: 'MA', url: '/maarts' }] },
      { school: 'School of Yogic Science and Naturopathy', courses: [{ name: 'M.A', url: '/yogicma' }, { name: 'M.Sc', url: '/yogicmsc' }] },
    ],
    DIPLOMA: [
      { school: 'School of Engineering', courses: [{ name: 'Diploma in CE', url: '/engineer' }, { name: 'Diploma in ME', url: '/mechanic' }, { name: 'Diploma in CSE', url: '/cse' }] },
      { school: 'School of Science And Technology', courses: [{ name: 'AI and ML / Data Science & Cloud Technology / Cyber Security / Forensic Science', url: '/data' }] },
      { school: 'School of Agriculture', courses: [{ name: 'Diploma in Agriculture', url: '/diploma' }] },
      { school: 'School of Nursing Paramedical & Allied Science', courses: [{ name: 'ANM', url: '/nursinganm' }, { name: 'GNM', url: '/nursinggnm' }, { name: 'D.Pharma', url: '/nursingdpharma' }] },
      { school: 'School of Hotel Management & Tourism', courses: [{ name: 'Diploma - Hotel Management', url: '/hoteldiploma' }] },
    ],
    DOCTORATE: [
      { school: 'School Of Commerce And Management Studies', courses: [{ name: 'Ph.D', url: '/phd' }] },
      { school: 'School of Arts and Humanities', courses: [{ name: 'Ph.D.', url: '/phdarts' }] },
    ],
  };

  return (
    <div className="container-fluid bd">
      <div className='dbuu-container'> 
        <div className="choose-programme">
          <h2>CHOOSE YOUR <span className="bd3">PROGRAMME</span></h2>
        </div>
        <div className="dbuu-programmes d-flex flex-wrap justify-content-center align-items-start">
          <div className="programme-types">
            <ul>
              <li className={` ${selectedProgram === 'UNDERGRADUATE' ? 'active' : ''}`} onClick={() => handleProgramClick('UNDERGRADUATE')}>UNDERGRADUATE</li>
              <li className={`${selectedProgram === 'POSTGRADUATE' ? 'active' : ''}`} onClick={() => handleProgramClick('POSTGRADUATE')}>POSTGRADUATE</li>
              <li className={`${selectedProgram === 'DIPLOMA' ? 'active' : ''}`} onClick={() => handleProgramClick('DIPLOMA')}>DIPLOMA</li>
              <li className={`${selectedProgram === 'DOCTORATE' ? 'active' : ''}`} onClick={() => handleProgramClick('DOCTORATE')}>DOCTORATE</li>
            </ul>
          </div>
          <div className="programme-sections">
            {programs[selectedProgram].map((section, index) => (
              <div key={index} className="programme-section ">
                <h3>{section.school}</h3>
                <ul>
                  {section.courses.map((course, i) => (
                    <li key={i}>
                      <Link to={course.url}>{course.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
