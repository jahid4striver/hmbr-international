import React, { useEffect, useState } from 'react';

const useWebToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;

    const currentUser = {email: email};


    useEffect(() => {
          
                if(email){
                    fetch(`https://salty-dawn-53601.herokuapp.com/users/${email}`, {
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
                    console.log(accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
                }
            
        
    }, [email])

    return [token]
};

export default useWebToken;