import { React, useState, useEffect, useContext } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { ThemeContext } from "../UseContext";
// const axios = require("axios").default;

const Fetch = () => {
  let [loading, setLoading] = useState(true);

  const [user, setUsers] = useState([]);

  // const users = async () =>
  // fetch("https://api.github.com/users")
  //     .then((res) => (res.json()))
  //     .then((data) =>  setUsers(data));

  // const users =  async () => {
  // const response = await axios.get("https://api.github.com/userss") ;
  //        setUsers(response.data)
  // }

  const users = async () => {
    // setTimeout(async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      setUsers(await res.json());
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    // }, 3000);
  };

  console.log(user);

  useEffect(() => {
    setTimeout(() => {
      users();
    }, 2000);
  }, []);

  const theme = useContext(ThemeContext);
  let color = theme.state.theme;
  
    console.log(color);
  

  let ACTIONS = theme.ACTIONS;
  // let dispatch = theme.dispatch;

 
  return (
    <div
      id="Fetch "
      className={` min-vh-100 ${
        color === ACTIONS.LIGHT ? "bg-secondary" : "bg-black"
      }`}
    >
      <div className="container py-5">
        {/* <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5"> */}
        <div className="gap-4 grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {user.map((users) => {
            const { id, login, type, html_url, avatar_url } = users;
            return (
              <div key={users.id} className="">
                <div className="card align-items-center p-3">
                  <div className="imgDiv mb-3 overflow-hidden rounded-full">
                    <img
                      src={avatar_url}
                      alt="avatar"
                      height={100}
                      width={100}
                      className="rounded-circle transition duration-500 ease-in-out  hover:ease-in-out  hover:scale-150"
                    />
                  </div>
                  <div>
                    <h4>{login}</h4>
                  </div>
                  <div>
                    <p>{id}</p>
                  </div>
                  <div>
                    <p>{type}</p>
                  </div>
                  <div>
                    <a
                      rel="noreferrer"
                      href={html_url}
                      target="_blank"
                      className="nav-link px-0"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MoonLoader
        color="#ae0101"
        loading={loading}
        size={74}
        speedMultiplier={1}
        cssOverride={{ display: "block", margin: "300px auto" }}
      />
    </div>
  );
};

export default Fetch;
