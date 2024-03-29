import { useContext } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateProvider = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return (
            <div className="min-h-screen py-10 px-5 flex items-center justify-center gap-5">
                <h1 className='text-3xl font-bold text-white'>Loading</h1>
                <span className="loading loading-bars loading-lg text-white"></span>
            </div>
        )
    }

    if (user?.email) {
        return children;
    }
    return <Navigate to={'/'} replace></Navigate>
};

export default PrivateProvider;