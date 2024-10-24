import React from 'react';

import './Legal.css';

import Legalcourses from './Legalcourses';


const Llb = () => {
  return <div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best LLB</span> University in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    At Smt. Manjira Devi University, the BA in LLB program offers a unique blend of legal education integrated with a strong foundation in arts disciplines. Spanning five years, this program aims to provide students with a deep understanding of both law and humanities subjects. The curriculum covers key aspects of law including constitutional, criminal, civil, and corporate law, while also incorporating subjects from fields like political science, sociology, and economics. The faculty comprises experienced legal professionals and scholars who bring practical insights into the classroom. Students engage in moot court competitions, internships, and legal clinics to gain hands-on experience and practical skills. Ethics and social responsibility are emphasized throughout the program, preparing graduates to become ethical and competent legal professionals. The BA in LLB program at Smt. Manjira Devi University ensures students are well-prepared for diverse career opportunities in the legal field and beyond.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="law3.jpg" alt="" className="arts1image" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'><span>LLB - </span>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            The LL.B program focuses exclusively on legal education, covering core subjects such as Constitutional Law, Criminal Law, Civil Procedure, Legal Writing, and Advocacy. It includes practical training through moot courts, internships, and legal research projects.
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 years (6 semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Completion of a bachelor’s degree in any discipline from a recognized university. Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 %  and SC/ST- 45 %.

               </p>
               <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
Similar to B.A. LL.B graduates, LL.B graduates can pursue careers as lawyers in various fields of law, including litigation, corporate law, criminal law, civil law, intellectual property law, and more. They can also work as legal advisors, consultants, judges, and legal analysts in government agencies, corporate firms, NGOs, and academia.



</p>
        </div>
        <div className="col-md-5 image-column"><br/>
            <img
              style={{ width: "520px", height: "440px", borderRadius: "8px" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Legalcourses/>
</div>

}

export default Llb;