import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Nav from "./Components/components/Nav";
import SignUp from "./Components/Auth/SignUp";
import Footer from "./Components/components/Footer";
import SignUpLecturer from "./Components/Auth/SignUpLecturer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/lecturer" component={SignUpLecturer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
