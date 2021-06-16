import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Nav from "./Components/components/Nav";
import SignUp from "./Components/Auth/SignUp";
import Footer from "./Components/components/Footer";
import SignUpLecturer from "./Components/Auth/SignUpLecturer";
import LecturerClass from "./Components/Lecturer/LecturerClass";
import LecturerMessage from "./Components/Lecturer/LecturerMessage";
import AddLecture from "./Components/Lecturer/AddLecture";
import AddVideo from "./Components/Lecturer/AddVideo";
import AddAssignment from "./Components/Lecturer/AddAssignment";
import AddAnnouncement from "./Components/Lecturer/AddAnnouncement";
import PrivateRoute from "./Components/components/PrivateRoute";
import StudentClass from "./Components/Students/StudentClass";
import StudentMessage from "./Components/Students/StudentMessage";
import Downloadables from "./Components/Students/Downloadables";
import ViewAssignments from "./Components/Students/ViewAssignments";
import ViewAnnoucement from "./Components/Students/ViewAnnoucement";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/lecturer" component={SignUpLecturer} />
        <PrivateRoute path="/dashboard" component={LecturerClass} />
        <PrivateRoute path="/dashboard-message" component={LecturerMessage} />
        <PrivateRoute path="/add-lecture" component={AddLecture} />
        <PrivateRoute path="/add-video" component={AddVideo} />
        <PrivateRoute path="/add-assignment" component={AddAssignment} />
        <PrivateRoute path="/add-annoucement" component={AddAnnouncement} />
        <PrivateRoute path="/student-dashboard" component={StudentClass} />
        <PrivateRoute path="/student-message" component={StudentMessage} />
        <PrivateRoute path="/downloadables" component={Downloadables} />
        <PrivateRoute path="/viewassignments" component={ViewAssignments} />
        <PrivateRoute path="/annoucements" component={ViewAnnoucement} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
