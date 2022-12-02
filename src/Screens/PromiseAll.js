import '../App.css';
import axios from "axios";
import { useEffect, useState } from "react";


function PromiseAll() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [bodies, setBodies ] = useState([]);
  
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      setLoading(false);
    });

    hitAPIS();
  
  }, []);

  const arr = []
  for (let i = 1; i <= 100; i++) {
    arr.push(axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`))
  }
  // console.log(arr)


  // let bodyURL1 = "https://jsonplaceholder.typicode.com/posts/"
  // let bodyURL2 = "https://jsonplaceholder.typicode.com/posts/"
  // let bodyURL3 = "https://jsonplaceholder.typicode.com/posts/"

  // const promise1 = axios.get(bodyURL1);
  // const promise2 = axios.get(bodyURL2);
  // const promise3 = axios.get(bodyURL3);

  const hitAPIS = () => {
    Promise.all(arr).then(res =>  {
      // console.log(res);
      setBodies(res)
    });
    
  }
  

  console.log(bodies);
  return (
    <div >
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{bodies?.[item.id]?.data?.body}</p>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}

export default PromiseAll;
