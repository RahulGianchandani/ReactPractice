import { useEffect, useState, useContext } from "react";
import {  toast } from "react-toastify";
import { ThemeContext } from "../UseContext";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";


const Register = () => {
  // const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  // console.log(inputs);
  // const [data, setData] = useState([])
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  // const [validPass, setValidPass] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);

  const handleInputs = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    const {name, value} = e.target;
    
    setInputs({ ...inputs, [name]: value });
 

    


}

useEffect(() => {
 
      if (  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        inputs.email
      )  
  )
  {
    setValidEmail(true)
    console.log('wrong email pattern');
    
  }
  else {
    setValidEmail(false)
    console.log('good email pattern');
  }


      if (  !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!.@$%^&*-]).{8,}$/.test(
        inputs.password
      )  
  )
  {
    setValidPass(true)
    console.log('wrong pass pattern');
    
  }
  else {
    setValidPass(false)
    console.log('good pass pattern');
  }

  
      if (  !/^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/.test(
        inputs.number
      )  
  )
  {
    setValidNumber(true)
    console.log('11 digits needed');
    
  }
  else {
    setValidNumber(false)
    console.log('digits complete');
  }

}, [inputs])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name, email, password, number} = inputs;
    if (name && email && password && number) {
      setInputs({ name: "", email: "", password: "", number: "" });


      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        // M.toast("Wow so easy!");
        toast.warning(" Invalid Email format", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
  
      if (
        !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!.@$%^&*-]).{8,}$/.test(
          password
        )
      ) {
        // M.toast("Wow so easy!");
        toast.warning(" Invalid Password format", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
  
      if (
        !/^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/.test(
          number
        )
      ) {
        // M.toast("Wow so easy!");
        toast.warning(" Invalid Number format", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
  
  



      
      const newData = { ...inputs, id: new Date().getTime() }; // object to store latest new inputs value
      console.log(newData);
      setData([...data, newData]); //new State to store all values from input and new as array
      console.log(data);

      setToggle(true);





      toast.success(" 🙂 Data sent to FBI", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn("👮‍♂️ Fill in the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // navigate("/");
    }
  };

  // console.log(`state is ${toggle}`);

  const state = useContext(ThemeContext);
  console.log(state)

  const color = state.state.theme;
  console.log(color)


  return (
    <div id="Register" className=" position-relative" >
      <div className="container h-100 py-5 ">
        <div className="row h-100 mx-0 justify-content-center align-items-center">
          <form className="col-5" onSubmit={handleSubmit}>
            <div className=" mb-3">
              <label className="form-label fw-bold text-white " htmlFor="name">
                Name
              </label>
              <input
                autoComplete="current-password"
                type="text"
                id="name"
                name="name"
                className={`form-control ${color === "black" ? "bg-black text-white caret-white focus:bg-black" : ""}`}
                placeholder="Enter Name"
                onChange={handleInputs}
                value={inputs.name}
              />
            </div>
            <div className=" mb-3">
              <label
                className="form-label fw-bold text-white "
                htmlFor="exampleInputEmail1"
              >
                Email address
              </label>
              <input
                autoComplete="current-password"
                type="email"
                className={`form-control ${color === "black" ? "bg-black text-white caret-white focus:bg-black" : ""}`}
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={handleInputs}
                value={inputs.email}
              />

              {
               inputs.email? validEmail? <p className="fw-bold" style={{color:'red'}}>Wrong pattern!</p> : <p className="fw-bold" style={{color:'lime'}}>Correct Email</p> : ""
              }
            </div>
            <div className=" mb-3">
              <label
                className="form-label fw-bold text-white "
                htmlFor="exampleInputPassword1"
              >
                Password
              </label>
              <input
                autoComplete="current-password"
                type="password"
                className={`form-control ${color === "black" ? "bg-black text-white caret-white focus:bg-black" : ""}`}
                id="exampleInputPassword1"
                name="password"
                placeholder="Password"
                onChange={handleInputs}
                value={inputs.password}
              />
                {
               inputs.password? validPass? <p className="fw-bold" style={{color:'red'}}>Wrong pattern!</p> : <p className="fw-bold" style={{color:'lime'}}>Strong Password</p> : ""
              }
            </div>
            <div className=" mb-3">
              <label
                className="form-label fw-bold text-white "
                htmlFor="number"
              >
                Number
              </label>
              <input
                autoComplete="current-password"
                type="tel"
                className={`form-control ${color === "black" ? "bg-black text-white caret-white focus:bg-black" : ""}`}
                id="number"
                name="number"
                placeholder="number"
                onChange={handleInputs}
                value={inputs.number}
              />
              {
                 inputs.number ? validNumber ? <p className="fw-bold" style={{color: 'red'}}>11 digits required</p> : <p className="fw-bold" style={{color: "lime"}}>Good Number</p> : ""
              }
            </div>
            <button type="submit" disabled={!( inputs.name && inputs.email && inputs.password && inputs.number)} className="btn bg-black text-white col-12 mt-3 py-2">
              Submit
            </button>
          </form>
        </div>
        {toggle &&
          data.map((item, i) => {
            const { name, email, password, number, id } = item;
            return (
              <div
                key={id}
                className="row mx-0 justify-content-between align-items-center bg-primary mt-5 p-3 shadow-lg rounded text-white text-center"
              >
                {/* <p className="col-3 h5" >{id}</p> */}
                <p className="col-3 h5">{name} </p>
                <p className="col-3 h5">{email} </p>
                <p className="col-3 h5">{password} </p>
                <p className="col-3 h5">{number} </p>
              </div>
            );
          })}
      </div>

    </div>
  );
};

export default Register;
