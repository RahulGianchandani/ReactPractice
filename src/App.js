import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Fetch />} />
      
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
// export {ThemeContext};
