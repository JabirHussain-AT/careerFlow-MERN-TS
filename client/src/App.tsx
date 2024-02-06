import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IUserSelector } from "./interface/IUserSlice";
import { useEffect, ReactNode } from "react";
import { makeErrorDisable } from './redux/reducers/user/userSlice';
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import CompanySignup from "./pages/company/Signup/CompanySignup";
import Home from "./pages/user/Home";
import CompanyForm from "./pages/company/Home/CompanyForm";
import Dashboard from "./pages/company/Home/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashborad";
import AdminApproval from "./pages/admin/AdminApprovel"
import Sidebar from "./components/admin/Sidebar";

interface ProtectedRouteProps {
  element: ReactNode;
}

function App() {
  const { user, error } = useSelector((state: IUserSelector) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(makeErrorDisable());
      }, 5000);
    }
  }, [error, dispatch]);

  const userProtectedRoute = ({ element }: ProtectedRouteProps): JSX.Element => {
    return user?.role === 'user' ? <>{element}</> : <Navigate to='/login' />;
  };

  const companyProtectedRoute = ({ element }: ProtectedRouteProps): JSX.Element => {
    return user?.role === 'company' ? <>{element}</> : <Navigate to='/login' />;
  };

  const adminProtectedRoute = ({ element }: ProtectedRouteProps): JSX.Element => {
    return user?.role === 'admin' ? <>{element}</> : <Navigate to='/login' />;
  };

  return (
    <Router>
      <Routes>
        {user !== null && user.role ? (
          // Common Routes
          <>
            <Route path='/' element={<>{user?.role === 'company' ? <Navigate to={'/company/dashboard'} /> : user?.role === "admin" ? <Navigate to={'/admin/dashboard'} /> : <Home />}</>} />
            <Route path='/signup' element={<>{user?.role === 'company' ? <Navigate to={'/company/dashboard'} /> : user?.role === "admin" ? <Navigate to={'/admin/dashboard'} /> : <Navigate to={'/'}  />}</>} />
            <Route path='/login' element={<>{user?.role === 'company' ? <Navigate to={'/company/dashboard'} /> : user?.role === "admin" ? <Navigate to={'/admin/dashboard'} /> :<Navigate to={'/'}  />} </>} />
            <Route path='/company/dashboard' element={<>{user?.role === 'company' ? <Navigate to={'/company/dashboard'} /> : <CompanyForm />}</>} />
            <Route path='/company/signup' element={<>{user?.role === 'company' ? <Navigate to={'/company/dashboard'} /> : <CompanySignup />}</>} />

            {/* Company Routes */}
            <Route path='/company/dashboard' element={<>{companyProtectedRoute({ element: <Dashboard /> })}</>} />
            <Route path='/company/signup' element={<>{companyProtectedRoute({ element: <CompanySignup /> })}</>} />

            {/* User Routes */}
            <Route path='/' element={<>{userProtectedRoute({ element: <Home /> })}</>} />
            <Route path='/signup' element={<>{userProtectedRoute({ element: <Signup /> })}</>} />
            <Route path='/login' element={<>{userProtectedRoute({ element: <Login /> })}</>} />

            {/* Admin Routes */}
            <Route path= 'admin' element={<>{adminProtectedRoute({element:<Sidebar/>})}</>}>
              <Route path="dashboard" element={<>{adminProtectedRoute({element:<AdminDashboard/>})}</>}/>
              <Route path="company-approval" element={<>{adminProtectedRoute({element:<AdminApproval/>})}</>}/>
            </Route>
            {/* <Route path='/admin/dashboard' element={<>{adminProtectedRoute({ element: < AdminDashboard /> })}</>} />
            <Route path='/admin/company-approvel' element={<>{adminProtectedRoute({ element: <  AdminApproval /> })}</>} />
            <Route path='/login' element={<>{adminProtectedRoute({ element: <Login /> })}</>} /> */}
          </>
        ) : (
          // Redirect to Login when user is null
          <>
          <Route path='/signup' element={< Signup />} />
          <Route path='/company/signup' element={< CompanySignup />} />
          <Route path='*' element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
