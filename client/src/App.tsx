import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import CompanySignup from "./pages/company/CompanySignup"
import { useSelector } from "react-redux";
import { IUserSelector } from "./interface/IUserSlice";
import Home from "./pages/user/Home";

function App() {
  const { user } = useSelector((state: IUserSelector) => state.user);
  console.log('======> ',user)
  return (
    <Router>
      <>
        <Routes>
          {/* Use a single Route component */}
          {user?.email ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Home />} />
              <Route path="/login" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path='/company/signup' element={ < CompanySignup />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
