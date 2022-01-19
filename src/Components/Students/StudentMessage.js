import React, { useState } from "react";
import { Div, StudentLeft } from "../components/Helper";
import "./student.css";

const StudentMessage = () => {
  const [message, setMessage] = useState("inbox");

  const controlClick = (msg) => {
    setMessage(msg);
  };

  return (
    <Div>
      <div className="student-dashboard">
        <StudentLeft>
          <div className="message-side">
            <div className="btn">
              <button onClick={() => controlClick("inbox")}>INBOX</button>
              <button onClick={() => controlClick("sent")}>SENT</button>
            </div>
            <div className="messages">
              {message === "inbox" ? (
                <>
                  <div>
                    <h4>Mrs Philomina Akachukwu </h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                  <div>
                    <h4>Mr John Okafor</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                  <div>
                    <h4>Mr Uwakwe Samson</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                  <div>
                    <h4>Mrs Stella Micheal</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                  <div>
                    <h4>Mr Azubuike Promise</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                  <div>
                    <h4>Mr John Jude</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4>Mr Ezekiel</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                  <div>
                    <h4>Mr Onwo Okafor</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </StudentLeft>
        <div className="student-rightside">
          <div className="create-message">
            <form>
              <h3>CREATE MESSAGE</h3>
              <div className="btn">
                <button>TO LECTURER</button>
              </div>

              <label>To</label>
              <input type="text" name="username" />
              <label>Content</label>
              <textarea />

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default StudentMessage;
