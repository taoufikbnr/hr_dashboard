import { useContext, useState } from "react";
import "./login.css";
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  const login = e => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
    } else if (email === "safouane14@gmail.com" && password === "123") {
      history.push("/path");
    } else {
      setError("Wrong email or password");
    }
  };

  return (
    <form onSubmit={login}>
      <h1 style={{ color: "#1a202c" }}>LOGO</h1>
      <input type={"email"} placeholder="email" onChange={e => setemail(e.target.value)} required />
      <input type={"password"} placeholder="password" onChange={e => setpassword(e.target.value)} required />
      <button className="login-button">Sign in</button>
      {error && <p className="login-error">{error}</p>}
    </form>
  );
};

export default Login;
