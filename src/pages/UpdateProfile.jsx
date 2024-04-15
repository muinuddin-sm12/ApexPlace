import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    console.log(name, url);
    try {
      await updateUserProfile(name, url);
    } catch (error) {
      console.log(error.message);
    }
    window.location.reload();
  };
  console.log(user);
  return (
    <div
      data-aos="zoom-in"
      className="hero h-[calc(100vh-316px)] flex justify-center items-center"
    >
      <Helmet>
        <title>ApexPlace | Update Profile</title>
      </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleUpdateUser} className="card-body">
          {user.email && (
            <>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={user?.email}
                className="input input-bordered"
                readOnly
              />
            </>
          )}
          <label htmlFor="name" className="block text-sm font-medium">
            User Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={user.displayName}
            className="input input-bordered"
          />
          <label htmlFor="url" className="block text-sm font-medium">
            Photo URL
          </label>
          <input
            type="text"
            name="url"
            id="url"
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
