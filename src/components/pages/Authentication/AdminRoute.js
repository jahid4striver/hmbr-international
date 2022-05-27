import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const AdminRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    const email = user.email;

    const url = `https://salty-dawn-53601.herokuapp.com/users?email=${email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
                console.log(data);
            })

    }, [])



    if (loading) {
        return <progress class="progress w-56"></progress>
    }

    if (!currentUser?.role=== 'admin') {
        return <Navigate to='/' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default AdminRoute;