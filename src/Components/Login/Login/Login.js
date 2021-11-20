import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle, setIsLoading, setUser,loginProcess,handleEmail,handlePassword,setMessage,message,setError,error,saveUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
     // handle Google Login 
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        saveUser(result.user.email,result.user.displayName,'PUT')
        console.log(redirect_uri);
        setMessage("Login Successful");
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setMessage("");
        setError("Login Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

      //handle login with email and password 
  const handleLoginProcess =(e) =>{
    e.preventDefault();
    loginProcess()
    .then((result) => {
        setUser(result.user);
    
        setMessage("Login Successful");
        setError("");
        history.push(redirect_uri);
        //  console.log(result.user)
      })
      .catch((error)=>{
        setMessage("");
        setError("Login Failed");
      })
      
  }
    return (
        <div>
            <div className="login-section">
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto form-section">
            <h3 className="text-center mb-4">Login</h3>
            <Form onSubmit={handleLoginProcess}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onBlur={handleEmail}
                  className="input-field"
                  type="email" required
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onBlur={handlePassword}
                  className="input-field" required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <input className="signup-btn" type="Submit" value="Sign in" />
            </Form>
            <p className="text-success mt-2 text-center">{message}</p>
            <p className="text-danger mt-2 text-center">{error}</p>

            <Link to="/register" className="link">
              <p>create a new account?</p>
            </Link>
          

            <div className="icon-section">
             {/* google login button  */}
              <div onClick={handleGoogleLogin} className="d-flex align-items-center google-login pe-2">
                  <img src="https://i.ibb.co/gRXw5VG/google.png" alt="" />
                  <a href="#">Continue with Google</a>
              </div>

           
            
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;