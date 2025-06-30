// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
    const { isLoggedIn  } = useAuth();
    //     if (loading) {
    //         return <div className="text-center mt-10">Loading...</div>; // You can replace with a spinner
    //     }
    // // If not logged in, redirect to login
    if (!isLoggedIn) {
        console.log(isLoggedIn)
        return <Navigate to="/login" replace />;
    }else{
        return <Outlet />;
    }

}

export default ProtectedRoute;
