import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPass: "",
    confirmPass: "",
  });
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    // password doesn't match
    if (formData.createPass != formData.confirmPass) {
      toast.error("Passkey does not  match");
      return;
    }
    //password matched.
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
    const accountData = {
      ...formData,
    };
    console.log(`Printing ${formData.firstName} ${formData.lastName} details.`);
    console.log(accountData);
  }
  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div className="flex flex-col">
      <div className="flex max-w-max p-[2px] gap-x-1 rounded-full bg-slate-800 ">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-slate-950 text-slate-50"
              : "bg-transparent text-slate-200"
          } font-mono  py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-slate-950 text-slate-50"
              : "bg-transparent text-slate-200"
          } font-mono py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="names flex gap-3 w-[300px]">
          <label htmlFor="">
            <p className="mb-1 leading-[1.375rem] text-[0.875rem] font-mono ">
              First Name<sup className="text-red-400">*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              className="w-full rounded-sm p-[6px] bg-slate-800 text-slate-50"
            />
          </label>
          <label htmlFor="">
            <p className="mb-1 leading-[1.375rem] text-[0.875rem] font-mono ">
              Last Name<sup className="text-red-400">*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last name"
              className="w-full rounded-sm p-[6px] bg-slate-800 text-slate-50"
            />
          </label>
        </div>
        <label htmlFor="">
          <p className="mb-1 leading-[1.375rem] text-[0.875rem] font-mono ">
            Email Address<sup className="text-red-400">*</sup>
          </p>
          <input
            type="text"
            name="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            className="w-full rounded-sm p-[6px] bg-slate-800 text-slate-50"
          />
        </label>
        <div className="pass">
          <label htmlFor="" className="relative">
            <p className="mb-1 leading-[1.375rem] text-[0.875rem] font-mono ">
              Create Password<sup className="text-red-400">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="createPass"
              required
              value={formData.createPass}
              onChange={changeHandler}
              placeholder="Create Passkey"
              className="w-full rounded-sm p-[6px] bg-slate-800 text-slate-50"
            />
            <span
              className="absolute right-3 top-[33px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label htmlFor="" className="relative">
            <p className="mb-1 leading-[1.375rem] text-[0.875rem] font-mono ">
              Confirm Password<sup className="text-red-400">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPass"
              required
              value={formData.confirmPass}
              onChange={changeHandler}
              placeholder="Confirm Passkey"
              className="w-full rounded-sm p-[6px] bg-slate-800 text-slate-50"
            />
            <span
              className="absolute right-3 top-[61.5px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-500 text-black font-mono font-semibold rounded-md p-1 mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
