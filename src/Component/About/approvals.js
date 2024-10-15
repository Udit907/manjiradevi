import React from 'react';

const approvals = () => {
  return (
    <div>
      <div className="container-fluid msgimage11">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <h2 className="text-white display-3 msgsmt" style={{ textAlign: 'center' }}>
                ACADEMICS Notifications
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-5">
        <ul style={{ listStyleType: 'disc', paddingLeft: '50px' }}>
          <li>
            <a href="/Holidays.pdf" style={{ textDecoration: 'underline' }}>
              List of Holidays
            </a>
          </li>
          <li>
            <a href="/calendar.pdf" style={{ textDecoration: 'underline' }}>
              Academic Calendar 2024-25
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default approvals;
