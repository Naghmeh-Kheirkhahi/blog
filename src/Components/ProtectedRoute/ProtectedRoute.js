
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";


function ProtectedRoute() {
    const { username } = useContext(UserContext);

    return (
        <>
            {username ? <Outlet /> : <Navigate to='/Login' replace />}
        </>
    );
}

export default ProtectedRoute;
