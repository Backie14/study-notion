import Template from '../components/Template'
import loginImg from '../assets/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <div className="">
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tommorrow, and beyond."
        desc2="Education to future-proof your career"
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype="login"
      />
    </div>
  );
}

export default Login
