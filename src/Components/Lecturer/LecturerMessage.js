import React, { useState } from "react";
import { Div, LecturerLeft } from "../components/Helper";

const LecturerMessage = () => {
  const [message, setMessage] = useState("inbox");

  const controlClick = (msg) => {
    setMessage(msg);
  };
  console.log(message);
  return (
    <Div>
      <div className="lecturer-dashboard">
        <LecturerLeft>
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
                      Join us today in the departmental fellowship which hold at
                      the 3rd year class by 5:00 pm on fridays
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
                    <h4>Mr John Okafor</h4>
                    <p>
                      Good evening, this is to remind your of our monthly
                      contribution. The amount is #5000
                    </p>
                  </div>
                  <div>
                    <h4>Final year Class Rep</h4>
                    <p>
                      Good afternon sir, we will like to know the final date for
                      the submission of the assignment you gave to us
                    </p>
                  </div>
                  <div>
                    <h4>Mr Uwakwe Samson</h4>
                    <p>
                      this is to remind you of the meeting we are going to have
                      this friday by 4:00 pm at jimbazz
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4>Final years</h4>
                    <p>
                      The submission of your Assignment will be on friday 12th
                      of July
                    </p>
                  </div>
                  <div>
                    <h4>Mr John Okafor</h4>
                    <p>
                      I won't be able to attend the meeting on time due to the
                      burial of my cousin, I will be 30 minutes late
                    </p>
                  </div>
                  <div>
                    <h4>Third years</h4>
                    <p>
                      No Student is allowed to submit his or her assignment
                      personally, go through the course representative
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </LecturerLeft>
        <div className="rightside">
          <div className="create-message">
            <form>
              <h3>CREATE MESSAGE</h3>
              <div className="btn">
                <button>FOR LECTURER</button>
                <button>FOR STUDENT</button>
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

export default LecturerMessage;
