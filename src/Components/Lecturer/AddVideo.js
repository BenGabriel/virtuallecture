import React from "react";
import { Div, LecturerLeft } from "../components/Helper";
import "./lecturer.css";

const AddVideo = () => {
  return (
    <Div>
      <div className="lecturer-dashboard">
        <LecturerLeft style={{ width: "100%" }}>
          <div className="addlecture-class">
            <div className="addlecture">
              <form>
                <h3>ADD LECTURE VIDEO</h3>

                <label>File</label>
                <input type="file" />
                <input type="text" placeholder="Filename" />
                <input type="text" placeholder="Description" />
                <button>Upload</button>
              </form>
            </div>
            <div className="addlecture">
              <h3>SELECT THE CLASS TO SEND THE VIDEO</h3>
              <div className="select-materialclass">
                <button>Check All</button>
                <div>
                  <p>
                    Data Structure <b>Cos 422</b>
                  </p>
                  <hr />
                  <i>Morning</i>
                </div>
                <div>
                  <p>
                    Switching Algebra <b>Cos 314</b>
                  </p>
                  <hr />
                  <i>Morning</i>
                </div>
                <div>
                  <p>
                    Computer Architechture <b>Cos 444</b>
                  </p>
                  <hr />
                  <i>Morning</i>
                </div>
              </div>
            </div>
          </div>
        </LecturerLeft>
      </div>
    </Div>
  );
};

export default AddVideo;
