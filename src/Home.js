import { useState } from "react";
import "./home.css";
import { signIn, createUser } from "./loginManager/user";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Home() {
  const [data, setdata] = useState({ name: "", password: "" });
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.name && data?.password) {
      const { user, ...error } = signIn(data.name, data.password);
      if (!user || error.errorcode) {
        createUser(data.name, data.password);
      } else {
        navigate("/home");
      }
    }
    setdata({ name: "", password: "" });
  };
  return (
    <div className="home">
      <div className="board">Board.</div>
      <div className="login">
        <div className="login-inner">
          <div>sign in</div>
          <div>
            <button>Sign in with google</button>
            <button>Sign in with facebook</button>
          </div>

          <div className="login-form-cont">
            <div className="form-outer">
              <div className="form">
                <div className="email">
                  <p>Email</p>
                  <input
                    type="email"
                    required
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="password">
                  <p>Password</p>
                  <input
                    value={data.password}
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <a href="#">Forgot password</a>
                </div>
                <button style={{ width: "100%" }} onClick={handleSubmit}>
                  Sign In
                </button>
                <Link to="/home">Sign </Link>
              </div>
            </div>
            <div>footer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
