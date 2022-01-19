import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Div, StudentLeft } from "../components/Helper";
import "./student.css";

const ViewAssignments = () => {
  return (
    <Div>
      <div className="student-dashboard">
        <StudentLeft>
          <div className="added-class assignment">
            <h3>Assignments</h3>
            <div className="icon">
              <p>Data Structure</p>
              <RiDeleteBinLine size={20} color="red" />
            </div>
            <div className="icon">
              <p>Computer Mathematics</p>
              <RiDeleteBinLine size={20} color="red" />
            </div>
            <div className="icon">
              <p>Digital Design</p>
              <RiDeleteBinLine size={20} color="red" />
            </div>
            <div className="icon">
              <p>Data Structure</p>
              <RiDeleteBinLine size={20} color="red" />
            </div>
          </div>
        </StudentLeft>
        <div className="student-rightside">
          <div>
            <form>
              <h3>Submit Assignment</h3>
              <label>File</label>
              <input type="file" name="assignment" />
              <label>Lecturer</label>
              <input type="text" name="assignment" />

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default ViewAssignments;
