import "./component.css";
import "../Lecturer/lecturer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const Container = (props) => {
  return <div className="auth-container">{props.children}</div>;
};

export const Toast = {
  error: (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 4000,
      pauseOnHover: false,
    });
  },
  success: (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 4000,
      pauseOnHover: false,
    });
  },
};

export const Div = (props) => {
  return (
    <div {...props} className="dashboard-div">
      {props.children}
    </div>
  );
};

export const LecturerLeft = (props) => {
  return (
    <div {...props} className="leftside">
      <h2>DASHBOARD</h2>
      <p>Lecturer Activity Board</p>
      {props.children}
    </div>
  );
};
export const StudentLeft = (props) => {
  return (
    <div {...props} className="student-leftside">
      <h2>DASHBOARD</h2>
      <p>Student Board</p>
      {props.children}
    </div>
  );
};
