import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col">
      <form className="" onSubmit={submitHandler}>
        <label htmlFor="" className="w-full relative">
          <p className="mb-1 leading-[1.375rem] text-[0.875rem] font-mono">
            Email Address <sup className="text-red-500">*</sup>{" "}
          </p>
          <input
            type="text"
            value={formData.email}
            required
            onChange={changeHandler}
            placeholder="Enter email Id"
            name="email"
            className="w-full rounded-sm p-[6px] bg-slate-800 text-slate-50"
          />
        </label>

        <label htmlFor="" className="relative">
          <p className="mb-1 leading-[1.375rem] text-[0.875rem] font-mono ">
            Email password <sup className="text-red-400">*</sup>{" "}
          </p>
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            required
            onChange={changeHandler}
            placeholder="Enter passkey"
            name="password"
            className="w-full rounded-sm p-[6px] bg-slate-800"
          />
          <span
            className="absolute right-3 top-[61.5px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {" "}
            {showPassword ? (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="#">
            <p className="text-[10px] text-sky-500 text-right">Forgot Password ?</p>
          </Link>
        </label>
        <button className="w-full bg-yellow-500 text-black font-mono font-semibold rounded-md p-1 ">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
