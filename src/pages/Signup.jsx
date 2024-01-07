import Template from "../components/Template";
import signupImg from '../assets/signup.png'
const Signup = ({setIsLoggedIn}) => {
  return (
    <div className="w-screen h-[100vh]">
      <Template
        title="Connect with StudyNotion Now"
        desc2="Education to future-proof your career"
        image={signupImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype="signup"
      />
    </div>
  );
}

export default Signup
