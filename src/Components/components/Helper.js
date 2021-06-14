import "./component.css";
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
