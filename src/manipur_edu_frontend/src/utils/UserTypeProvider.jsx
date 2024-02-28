import React, { useState } from 'react';

export const UserContext = React.createContext();

function UserTypeProvider({ children }) {

    const [userType, setUserType] = useState('');





    return (
        <UserContext.Provider
            value={{ userType, setUserType }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserTypeProvider;