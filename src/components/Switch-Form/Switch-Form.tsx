import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Switch-Form.css";

function LoginForm({ onClick = (isLogin:boolean) => {} }) {
  return (
    <div className="switch">
      <div className="btnLeft" id="loginBtnOn">
        <div className="btnOn">Login</div>
      </div>
      <Link
        className="btnRight"
        id="registerBtnOff"
        to="/register"
        onClick={()=>onClick(true)}
      >
        <div className="btnOff">Register</div>
      </Link>
    </div>
  );
}

function RegisterForm({ onClick = (isLogin:boolean) => {} }) {
  return (
    <div className="switch">
      <Link className="btnLeft" id="loginBtnOff" to="/" onClick={()=>onClick(false)}>
        <div className="btnOff">Login</div>
      </Link>
      <div id="registerBtnOn" className="btnRight">
        <div className="btnOn">Register</div>
      </div>
    </div>
  );
}

function SwitchForms({ id = "", onClick = (isLogin:boolean) => {} }) {
  return (
    <>
      <div id={id}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm onClick={onClick} />} />
            <Route
              path="/register"
              element={<RegisterForm onClick={onClick} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default SwitchForms;
