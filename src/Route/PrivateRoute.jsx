import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading){
        return <div className='flex justify-center h-[50vh] items-center'>
            <progress className="progress w-56 progress-accent"></progress>
        </div>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to="/login" replace={true} state={{from: location}} />
    );
};

export default PrivateRoute;