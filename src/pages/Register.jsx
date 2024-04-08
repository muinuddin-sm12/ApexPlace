import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [error, setError] = useState("");
  const notify = () => toast.success("Successfully Registered!");
  const { userRegister, updateUserProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 Character!");
      return;
    }
    else if(!/^(?=.*[A-Z]).+$/.test(password)){
      setError("Password must have an Uppercase letter!")
      return
    }
    else if(!/^(?=.*[a-z]).+$/.test(password)){
      setError("Password must have an Lowercase letter")
      return
    }else{
      notify();
    }

    setError("");

    userRegister(email, password);
    updateUserProfile(name, url);
  };
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <Helmet>
        <title>ApexPlace | Register</title>
      </Helmet>
      <div className="hero mt-32">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              name="url"
              placeholder="PhotoURL"
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
            {error && <small className="text-red-600">{error}</small>}
            <div className="flex items-center gap-1 pb-3">
              Already have account?{" "}
              <p className="font-semibold">
                <Link to="/login">Login</Link>
              </p>
            </div>
            {/* <button className="btn btn-primary">Register</button> */}
            <input type="submit" className="btn bg-sky-300" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;