import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Bca() {
  return (
    <div className="school1-page">
      <div className="container mt-3">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <div className="col-md-0"></div>
          <h2 className="mb-2 mt-4 nursingh">
            <span className="nursing-span">Course </span>Overview
          </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px", textAlign: "justify", fontFamily: "serif" }}
          >
            Focuses on computer applications, software development, programming languages, database management, and computer networks. Includes practical training in software development and applications.
            <br />
            <span className="nursing-span">Duration: </span>
            <span>3 Years (6 Semesters)</span>
            <br />
            <span className="nursing-span">Eligibility: </span> Completion of higher secondary education (10+2) with Mathematics as a subject. Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 % and SC/ST- 45 %.
            <br />
            <span className="nursing-span">Career Opportunities: </span>
            <span>
              <br />
              <b>1.Software developer,</b>
              <br />
              <b>2.Web developer, </b>
              <br />
              <b>3.System analyst, </b>
              <br />
              <b>4.Database administrator,</b>
              <br />
              <b>5.Network administrator,</b>
              <br />
              <b>6.IT consultant.</b>
            </span>
            <br /><br />
          </div>
          <div className="col-md-4 image-column">
            <br /><br />
            <img
              className="hover-image"
              style={{ height: "50%" }}
              src="/science7.jpeg"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Bca;
