import { Link } from "react-router-dom";
import notion from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className=" flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <div>
        <Link to="/">
          <img src={notion} alt="" width={160} height={32} loading="lazy" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="flex text-xl text-white font-mono gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="button text-slate-100 flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            {" "}
            <button className="bg-slate-800 border-slate-700 border-[1px] py-[6px] px-[12px] rounded-lg font-semibold font-mono">
              Log In
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-slate-800 border-slate-700 border-[1px] py-[6px] px-[12px] rounded-lg font-semibold font-mono">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            {" "}
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="bg-slate-800 border-slate-700 border-[1px] py-[6px] px-[12px] rounded-lg font-semibold font-mono"
            >
              Log out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            {" "}
            <button className="bg-slate-800 border-slate-700 border-[1px] py-[6px] px-[12px] rounded-lg font-semibold font-mono">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
