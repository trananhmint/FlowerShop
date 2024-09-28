import React from "react";
import "./index.scss";
import { Checkbox, Form, Input, Row } from "antd";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { googleProvider } from "../../config/firebase";

function LoginPage() {
  const handleLoginGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ... 
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="login">
      <div className="login_form">
        <h1>Login</h1>

        <Form>
          <Form.Item>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item>
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <div className="login_option">
            <Checkbox>Remember me</Checkbox>
            <a href="">Forget passowrd</a>
          </div>

          <div className="login_button">
            <button>Login</button>
            <button className="guguru" onClick={handleLoginGoogle}>
              <img
                src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
                alt=""
                width={25}
              />
              Guguru
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
