import React, { useEffect, useState } from 'react';

const useWebToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    const currentUser = { email: email };

    useEffect(() => {
            if(email){
                fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
            }
        
    }, [])

    return [token]
};

export default useWebToken;