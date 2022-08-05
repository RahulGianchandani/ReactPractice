import { React, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Pagination = () => {
  const BASEURL = `https://jsonplaceholder.typicode.com/posts`;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const post = async () => {
    const res = await axios.get(BASEURL);
    const data = res.data;
    setPosts(data);
    setLoading(false);
  };
  console.log(posts);
  // const post = async () => {
  //   setLoading(true);
  //     const res =  await fetch(BASEURL);
  //     // console.log(res);
  //     const data = await res.json();
  //     setPosts(data);
  //   setLoading(false);
  // }

  useEffect(() => {
    // setTimeout(() => {
    // }, 2000);    
    post();
   
  }, [postsPerPage]);

  
  const pgNum = [];
    for (let i=1; i<= Math.ceil(posts.length/postsPerPage) ;i++) {
        pgNum.push(i)
        // pgNum[i-1] = i;
        console.log("i" + i)
    }


    console.log(pgNum)
  
 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

//   console.log(indexOfFirstPost);
//   console.log(indexOfLastPost);

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
//   console.log(currentPosts);
  

  return (
    <div className=" bg-gray-400 py-5  ">
      <div className="container min-h-screen">
        <div className="">
          <h1 className=" text-5xl text-center underline decoration-wavy decoration-cyan-700 mb-4">
            Pagination
          </h1>
          <div className="grid grid-cols-6">
              <h3 className="text-2xl text-start underline decoration-wavy decoration-cyan-500 mb-4 col-start-4">Page <span className="font-bold text-cyan-800">{currentPage}</span></h3>
              <div className="dropdown col-end-8">
  <button className="btn btn-secondary dropdown-toggle font-bold text-red-700" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {postsPerPage} posts
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" onClick={() => setPostsPerPage(10)} href="#">10</a></li>
    <li><a className="dropdown-item" onClick={() => setPostsPerPage(15)} href="#">15</a></li>
    <li><a className="dropdown-item" onClick={() => setPostsPerPage(20)} href="#">20</a></li>
  </ul>
</div>
          </div>
          {currentPosts.map((post) => {
            const { userId, id, title, body } = post;
       if(loading===true) {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
            }
            else {
                return (
                   <ul key={id} className="mx-0 border-2 border-gray-600 rounded p-2 m-1 font-bold  ">
                     {/* <h6>{userId}</h6> */}
                     {/* <h6>{id}</h6> */}
                     <li><span className="text-white">{id }.</span> {title}</li>
                     {/* {console.log(id)} */}
                     {/* <p>{body}</p> */}
                   </ul>
                 ) }
                }
          )}
          <BounceLoader
        color="#030bcf"
        loading={loading}
        size={70}
        speedMultiplier={2}
        cssOverride={{
          display: "block",
          marginTop: "70px",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
   
              <div id="pgNums" className="mt-5 flex text-center  justify-center ">
                {
                    pgNum.map((num, index) => {
                            // console.log(`num ${num} index ${index} currentPage ${currentPage}`);
                        return (
                            <span key={index} onClick={() => { setLoading(true); setCurrentPage(num);}}  className={` ${currentPage === num ? "bg-black text-white" : ""} border-2 w-20 ==hover:bg-black  hover:shadow-lg hover:text-white cursor-pointer`}>
                            {num} 
                          </span>
                        )
                    })
                }
              </div>
        </div>
      </div>

      
    </div>
  );
};

export default Pagination;
