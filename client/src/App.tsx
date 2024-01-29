import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/signup" element={< Signup />} />
          <Route path="/"  element={ < Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
