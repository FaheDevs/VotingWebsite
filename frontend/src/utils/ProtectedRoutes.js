import {Navigate ,Outlet } from "react-router"

const useAuth = () => {
    const user  = {loggedIn : false}
    console.log("use Auth ?")
    return user && user.loggedIn
  
}
const ProtectedRoutes = () => {
        const isAuth = useAuth();
        return isAuth ? <Outlet/> : <Navigate  to="/login"/> ;

};

export default ProtectedRoutes;