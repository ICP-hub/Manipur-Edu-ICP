import React, { useState } from 'react';
import { useAuth, useAuthClient } from './useAuthClient';

export const UserDataContext = React.createContext();

function UserDataProvider({ children }) {

    const { actor } = useAuthClient();

    const [userData, setUserData] = useState([]);
    const [studentData, setStudentData] = useState([])

    React.useEffect(() => {

        const userData = async () => {

            const newData = await actor.get_institute_students();
            console.log(newData);
            setUserData(newData);
            let studentDetailsArray = [];
            if (newData) {
                if (newData[0]) {
                    newData[0].forEach(async (element) => {
                        const studentDetails = await actor.get_student_details(element);
                        console.log(studentDetails)
                        studentDetailsArray.push(studentDetails);
                    });

                }


            }

            console.log(studentDetailsArray)
            setStudentData(studentDetailsArray)


        }

        userData();
    }, [])







    return (
        <UserDataContext.Provider
            value={{ userData, studentData }}
        >
            {children}
        </UserDataContext.Provider>
    );
}

export default UserDataProvider;