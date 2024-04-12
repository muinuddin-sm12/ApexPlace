import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Helmet } from "react-helmet-async";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const UpdateProfile = () => {
    // const notify = () => toast.success("User Updated Successfully!");
    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location?.state || '/update-profile';

    const { user, updateUserProfile} = useContext(AuthContext);

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        console.log(name, url)
        try {
            await updateUserProfile(name, url);
            // await navigate(from);
            // await notify()
        } catch (error) {
            console.log(error.message)
        }
        
        await window.location.reload();
    }

    console.log(user)
  return (
    <div data-aos="zoom-in" className="hero h-[calc(100vh-438px)] flex justify-center items-start mt-32">
      <Helmet>
        <title>ApexPlace | Update Profile</title>
      </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleUpdateUser} className="card-body">
          <input
            type="text"
            name="name"
            placeholder={user.displayName}
            className="input input-bordered"
          />
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="input input-bordered"
            disabled
          />
          <input
            type="text"
            name="url"
            placeholder={user.photoURL}
            className="input input-bordered"
          />
          <input className="btn bg-sky-300" type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
