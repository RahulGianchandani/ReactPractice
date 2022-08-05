import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../UseContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailPass, setEmailPass] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { ...email, ...password };
    // const newData = { email: email, password: password };
    console.log(email, password);

    setEmailPass([...emailPass, newData])
    console.log(emailPass);
  };



    const state = useContext(ThemeContext);
    const color = state.state.theme



  return (
    <div id="Login" className="h-screen position-relative">
      <div className="container h-screen">
        <div className="row h-screen justify-content-center align-content-center">
          <form action="" onSubmit={handleSubmit} className="col-5">
            <div className=" mb-3">
              <label className="form-label fw-bold text-white " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                 className={`form-control ${color === "black" ? "bg-black text-white caret-white focus:bg-black" : ""}`}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className=" my-4">
              <label className="form-label fw-bold text-white " htmlFor="pass">
                password
              </label>
              <input
                type="password"
                id="pass"
                name="password"
                 className={`form-control ${color === "black" ? "bg-black text-white caret-white focus:bg-black" : ""}`}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit" disabled={!email || !password} className="btn bg-black text-white  col-12 mt-3 py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
