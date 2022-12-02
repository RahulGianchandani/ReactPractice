import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Fetch from "./Screens/Fetch"
import Login from "./Screens/Login"
import Register from "./Screens/Register"
import Counter from "./Screens/Counter"
import Paginate2 from "./Screens/Paginate2"
import Pagination from "./Screens/Pagination"
import ReducerHook from "./Screens/ReducerHook"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PromiseAll from "./Screens/PromiseAll";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Fetch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pagination2" element={<Paginate2 />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/Reducer" element={<ReducerHook />} />
        <Route path="/promises" element={<PromiseAll />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
// export {ThemeContext};
