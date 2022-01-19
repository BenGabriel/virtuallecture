import React from "react";
import { Div, StudentLeft } from "../components/Helper";
import "./student.css";

const Downloadables = () => {
  return (
    <Div>
      <div className="student-dashboard">
        <StudentLeft style={{ width: "100%" }}>
          <div className="added-class downloadable">
            <h3>Download Materials</h3>
            <div>
              <p>
                Data Structure <i>( Mr John Okafor )</i>
              </p>
              <button style={{ marginTop: "4px" }}>Download</button>
            </div>
            <div>
              <p>
                Automata Theory<i>( Mrs Philomina Akachukwu )</i>
              </p>
              <button style={{ marginTop: "4px" }}>Download</button>
            </div>
            <div>
              <p>
                Computer Architechture <i>( Mr Uwakwe Samson )</i>
              </p>
              <button style={{ marginTop: "4px" }}>Download</button>
            </div>
            <div>
              <p>
                Digital Design <i>( Mrs Stella Micheal )</i>
              </p>
              <button style={{ marginTop: "4px" }}>Download</button>
            </div>
          </div>
        </StudentLeft>
      </div>
    </Div>
  );
};

export default Downloadables;
