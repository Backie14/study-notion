import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frame from "../assets/frame.png";
import loginImg from "../assets/login.png";
import signUpImg from "../assets/signup.png";
import { FcGoogle } from "react-icons/fc";
const Template = ({ title, desc1, desc2, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] h-screen py-12 mx-auto gap-x-12 gap-y-0 justify-between">
      <div className="">
        <h2 className="text-slate-50 font-semibold text-[1.875rem] leading-[2.375rem] ">
          {title}
        </h2>
        <p className="flex flex-col">
          <span className="text-[1.125rem] leading-[1.635rem] text-slate-200">
            {desc1}
          </span>
          <span className="text-yellow-500 italic">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex items-center my-4 gap-x-2">
          <div className=" w-full h-[1px] bg-slate-700"></div>
          <p>OR</p>
          <div className="w-full h-[1px] bg-slate-700"></div>
        </div>
        <div className="">
          <button
            className="w-full flex justify-center items-center gap-x-3 border rounded-md
           px-3 py-1 text-slate-100 border-slate-700 hover:shadow-sm
            hover:shadow-slate-200 transition-all duration-75 mt-6"
          >
            <FcGoogle /> <p> Sign up with Google</p>
          </button>
        </div>
      </div>
      <div className="relative w-11/12 max-w-[460px]">
        <img
          src={frame}
          alt=""
          height={558}
          width={504}
          loading="lazy"
          className=""
        />
        <img
          src={formtype === "signup" ? signUpImg : loginImg}
          alt=""
          height={558}
          width={490}
          loading="lazy"
          className="absolute right-4 -top-4"
        />
      </div>
    </div>
  );
};

export default Template;
