import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import CompanySignup from "./pages/company/Signup/CompanySignup"
import { useSelector } from "react-redux";
import { IUserSelector } from "./interface/IUserSlice";
import Home from "./pages/user/Home";
import CompanyForm from "./pages/company/Home/CompanyForm";
import Dashboard from "./pages/company/Home/Dashboard";

function App() {
  const { user } = useSelector((state: IUserSelector) => state.user);
  console.log('======> ',user)
  return (
    <Router>
      <>
        <Routes>
        <Route path="/" element={< CompanyForm />} />

          {/* Use a single Route component */}
          {user?.email ? (
            <>
              <Route path="/" element={< CompanyForm />} />
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
          <Route path='/dashboard' element={ < Dashboard />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
