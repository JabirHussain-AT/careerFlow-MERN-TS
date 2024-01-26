import LoginForm from "../../components/Login/LoginForm";
import NavBar from "../../components/Login/NavBar";

const Login: React.FC = () => {
  return (
    <>
      <NavBar />
      <LoginForm textToshow={"Are you a employer"} submitLink={"http:submit"} />
    </>
  );
};

export default Login;
