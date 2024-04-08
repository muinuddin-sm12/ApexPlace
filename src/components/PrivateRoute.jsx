import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(user){
        return children
    }
    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;