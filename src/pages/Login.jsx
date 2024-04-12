import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const Login = () => {
  // const notify = () => toast.error("User not registered!");
  const successNotify = () => toast.success("Login Successfully!");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await userLogin(email, password);
    // navigate to home page
  };

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        successNotify()
        navigate(from);
      }
    });
  };
  return (
    <div data-aos="zoom-in" className="min-h-[calc(100vh-438px)]">
      <Helmet>
        <title>ApexPlace | Login</title>
      </Helmet>
      <div className="hero mt-32">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            <div className="flex relative">
              <input
                type={showPassword? "text": "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-3 text-2xl">{showPassword? <IoMdEye/>:<IoMdEyeOff/>}</span>
            </div>
            <div className="flex items-center gap-1 py-3">
              Do not have any account?{" "}
              <p className="font-semibold">
                <Link to="/register">Register</Link>
              </p>
            </div>

            <input className="btn bg-sky-400 text-white text-base" type="submit" value="Login" />

            <div className="flex items-center py-3 gap-3">
              <h3 className="font-medium">Or login with,</h3>
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="btn btn-link btn-sm bg-black text-sky-400"
              >
                Google
              </button>
              <button
                onClick={() => handleSocialLogin(githubLogin)}
                className="btn  btn-link btn-sm bg-black text-sky-400"
              >
                Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
