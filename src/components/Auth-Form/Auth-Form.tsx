import "./Auth-Form.css";
import BtnEl from "../Btn/Btn";
import DataInput from "../Data-Input/Data-Input";
import SwitchForms from "../Switch-Form/Switch-Form";
import { useEffect, useState } from "react";

function registerEl({
  onChangeUsername = (v: string) => {},
  onChangePass = (v: string) => {},
  onChangeMail = (v: string) => {},
  onClick = () => {},
}) {
  return (
    <>
      <DataInput
        hint="Enter your Email Address"
        inputName="Email Address"
        id="inputRegEmail"
        onChange={onChangeMail}
      />
      <DataInput
        hint="Enter your User name"
        inputName="User name"
        id="inputRegUsername"
        onChange={onChangeUsername}
      />
      <DataInput
        hint="Enter your Password"
        inputName="Password"
        id="inputRegPassword"
        isPassword={true}
        onChange={onChangePass}
      />
      <div className="btnsContainer">
        <BtnEl text="Register" id="registerBtn" onClick={onClick} />
      </div>
    </>
  );
}

function loginEl({
  onChangeUsername = (v: string) => {},
  onChangePass = (v: string) => {},
  onClick = () => {},
}) {
  return (
    <>
      <DataInput
        hint="Enter your User name"
        inputName="User name"
        id="inputUsername"
        onChange={onChangeUsername}
      />
      <DataInput
        hint="Enter your Password"
        inputName="Password"
        id="inputPassword"
        isPassword={true}
        onChange={onChangePass}
      />
      <div className="btnsContainer">
        <div id="frgtPass">Forgot Password ?</div>
        <BtnEl text="Login" id="loginBtn" onClick={onClick} />
      </div>
    </>
  );
}

function AuthForm(): JSX.Element {
  let [state, setCount] = useState(0);
  useEffect(() => {}, [state]);
  const update = (_state: boolean) => {
    setCount(_state == false ? 0 : 1);
  };
  let loginName = "";
  let loginPassword = "";
  let registerName = "";
  let registerPassword = "";
  let registerMail = "";
  return (
    <>
      <div id="form">
        <div id="welcome">Welcome to lorem..!</div>
        <SwitchForms id="switch" onClick={(_state) => update(_state)} />
        <div id="dummyText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        {state == 0
          ? loginEl({
              onChangePass: (v) => {
                loginPassword = v;
                update(state == 1);
              },
              onChangeUsername: (v) => {
                loginName = v;
                update(state == 1);
              },
              onClick: () => {
                console.log(loginPassword, loginName);
                if (loginPassword || loginName) {
                  fetch(`https://serverURL.com/api/login`, {
                    method: "POST",
                    body: JSON.stringify({
                      username: loginName,
                      password: loginPassword,
                    }),
                  });
                } else {
                  console.log("error login");
                }
              },
            })
          : registerEl({
              onChangeMail: (v) => {
                registerMail = v;
                update(state == 1);
              },
              onChangePass: (v) => {
                registerPassword = v;
                update(state == 1);
              },
              onChangeUsername: (v) => {
                registerName = v;
                update(state == 1);
              },
              onClick: () => {
                console.log(loginPassword, loginName);
                if (registerMail || registerMail || registerPassword) {
                  fetch(`https://serverURL.com/api/register`, {
                    method: "POST",
                    body: JSON.stringify({
                      email: registerMail,
                      username: registerName,
                      password: registerPassword,
                    }),
                  });
                } else {
                  console.log("error register");
                }
              },
            })}
      </div>
      <div></div>
    </>
  );
}

export default AuthForm;
