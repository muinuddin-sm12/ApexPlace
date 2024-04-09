import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";

const Login = () => {
  // const notify = () => toast.error("User not registered!");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || '/';
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password);
    // navigate to home page
  };

  const handleSocialLogin = (socialProvider)=> {
    socialProvider()
    .then(result => {
      if(result.user){
        navigate(from)
      }
    })
  }
  return (
    <div className="min-h-[calc(100vh-80px)]">
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
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div className="flex items-center gap-1 py-3">
              Do not have any account?{" "}
              <p className="font-semibold">
                <Link to="/register">Register</Link>
              </p>
            </div>

            <input className="btn bg-sky-300" type="submit" value="Login" />

            <div className="flex items-center py-3 gap-3">
              <h3 className="font-medium">Or login with,</h3>
              <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-link btn-sm bg-black text-sky-400">Google</button>
              <button onClick={()=> handleSocialLogin(githubLogin)} className="btn  btn-link btn-sm bg-black text-sky-400">Github</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
